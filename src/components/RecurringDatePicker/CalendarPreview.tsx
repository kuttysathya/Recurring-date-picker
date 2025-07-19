"use client";

import React from "react";

interface CalendarPreviewProps {
  recurringDates?: Date[];
}

const CalendarPreview: React.FC<CalendarPreviewProps> = ({
  recurringDates = [],
}) => {
  const baseDate = recurringDates.length > 0 ? recurringDates[0] : new Date();
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const highlightDays = recurringDates
    .filter((d) => d.getMonth() === month && d.getFullYear() === year)
    .map((d) => d.getDate());

  const calendarCells: (number | null)[] = Array(firstDay).fill(null);
  for (let i = 1; i <= daysInMonth; i++) {
    calendarCells.push(i);
  }

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="bg-zinc-800 p-4 rounded-xl border border-yellow-400">
      <h3 className="text-md font-semibold mb-2">📅 Calendar Preview</h3>
      <p className="text-green-600 mb-2">
        Showing recurring dates for:{" "}
        <span className="text-yellow-400">
          {baseDate.toLocaleString("default", { month: "long", year: "numeric" })}
        </span>
      </p>

      <div className="grid grid-cols-7 text-center text-sm text-gray-300 mb-1">
        {dayNames.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 pl-4">
        {calendarCells.map((day, index) => (
          <div
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded text-sm ${
              day
                ? highlightDays.includes(day)
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-600 text-white"
                : ""
            }`}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPreview;