"use client";
import React from "react";

type RecurrenceOptionsProps = {
  selected: string;
  onChange: (value: string) => void;
};

const RecurrenceOptions = ({ selected, onChange }: RecurrenceOptionsProps) => {
  return (
    <div className="bg-zinc-800 p-4 rounded-xl">
      <label className="block text-sm font-medium mb-2">Recurrence:</label>
      <select
        className="border p-2 rounded w-full"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        <option className="text-black" value="daily">Daily</option>
        <option className="text-black" value="weekly">Weekly</option>
        <option className="text-black" value="monthly">Monthly</option>
        <option className="text-black" value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;

