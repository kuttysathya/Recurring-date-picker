
// const MonthlyPatternSelector = () => {
//   return (
//     <div className="p-4 border border-yellow-300 rounded-lg">
//       <h2 className="text-lg font-semibold">Monthly Pattern Selector</h2>
//     </div>
//   );
// };

"use client";

import React, { useState } from "react";

const MonthlyPatternSelector = () => {
  const [monthlyPattern, setMonthlyPattern] = useState("dayOfMonth");

  return (
    <div className="bg-zinc-800 p-4 rounded-xl">
      <label className="block font-medium mb-2">Monthly Pattern</label>
      <div className="flex gap-5">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="monthlyPattern"
            value="dayOfMonth"
            checked={monthlyPattern === "dayOfMonth"}
            onChange={(e) => setMonthlyPattern(e.target.value)}
          />
          Day of Month (e.g., 1st, 15th)
        </label>
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="monthlyPattern"
            value="weekdayPattern"
            checked={monthlyPattern === "weekdayPattern"}
            onChange={(e) => setMonthlyPattern(e.target.value)}
          />
          Weekday Pattern (e.g., Last Friday)
        </label>
      </div>

      {/* You can expand logic based on selection */}
      {monthlyPattern === "dayOfMonth" && (
        <input
          type="number"
          min={1}
          max={31}
          className="mt-2 p-2 border rounded w-32"
          placeholder="Enter day (1-31)"
        />
      )}

      {monthlyPattern === "weekdayPattern" && (
        <div className="mt-5 flex gap-4">
          <select className="p-2 border rounded">
            <option className="text-black" value="first">First</option>
            <option className="text-black" value="second">Second</option>
            <option className="text-black" value="third">Third</option>
            <option className="text-black" value="last">Last</option>
          </select>
          <select className="p-2 border rounded">
            <option className="text-black" value="Sunday">Sunday</option>
            <option className="text-black" value="Monday">Monday</option>
            <option className="text-black" value="Tuesday">Tuesday</option>
            <option className="text-black" value="Wednesday">Wednesday</option>
            <option className="text-black" value="Thursday">Thursday</option>
            <option className="text-black" value="Friday">Friday</option>
            <option className="text-black" value="Saturday">Saturday</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default MonthlyPatternSelector;
