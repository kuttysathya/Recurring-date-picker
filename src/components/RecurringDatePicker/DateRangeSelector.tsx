"use client";
import React from "react";

interface Props {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date | null) => void;
}

const DateRangeSelector: React.FC<Props> = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => {
  const handleStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onStartDateChange(new Date(e.target.value));
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onEndDateChange(value ? new Date(value) : null);
  };

  return (
    <div className="bg-zinc-800 p-4 rounded-xl">
      <label className="block mb-1 font-medium">Start Date</label>
      <input
        type="date"
        value={startDate ? startDate.toISOString().split("T")[0] : ""}
        onChange={handleStartChange}
        className="border p-2 rounded w-full mb-2"
      />

      <label className="block mb-1 font-medium">End Date (optional)</label>
      <input
        type="date"
        value={endDate ? endDate.toISOString().split("T")[0] : ""}
        onChange={handleEndChange}
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default DateRangeSelector;