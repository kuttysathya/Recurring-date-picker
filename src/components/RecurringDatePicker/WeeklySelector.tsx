"use client";
import React from "react";


interface Props {
  selectedDays: string[];
  onChange: (days: string[]) => void;
}

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WeeklySelector: React.FC<Props> = ({ selectedDays, onChange }) => {
  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      onChange(selectedDays.filter(d => d !== day));
    } else {
      onChange([...selectedDays, day]);
    }
  };

  return (
    <div className="bg-zinc-800 p-4 rounded-xl">
      <label className="block mb-2 font-medium">Select Days of the Week</label>
      <div className="flex flex-wrap gap-2">
        {daysOfWeek.map(day => (
          <button
           key={day}
           type="button"
           onClick={() => toggleDay(day)}
           className={`relative z-10 px-3 py-1 rounded border ${
           selectedDays.includes(day) ? "bg-blue-500 text-white": "bg-white text-black hover:bg-blue-200"
           }`}
          style={{ pointerEvents: "auto" }}
          >
           {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeeklySelector;