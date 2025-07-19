"use client";

import React, { useState } from "react";
import CalendarPreview from "./CalendarPreview";
import DateRangeSelector from "./DateRangeSelector";
import WeeklySelector from "./WeeklySelector";
import MonthlyPatternSelector from "./MonthlyPatternSelector";
import RecurrenceOptions from "./RecurrenceOptions";
import { generateRecurringDates } from "../../utils/generateRecurringDates";
import type { RecurrenceType } from "../../utils/generateRecurringDates";

const RecurringDatePicker = () => {
  const [recurrenceType, setRecurrenceType] = useState("daily");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const recurringDates = generateRecurringDates({
  type: recurrenceType as RecurrenceType,
  startDate: startDate || new Date(),
  endDate: endDate || undefined,
  selectedDays,
});

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          📅 Recurring Date Picker Demo
        </h1>

        <div className="bg-zinc-900 p-6 rounded-2xl shadow-md space-y-6 border border-zinc-700">
          <h2 className="text-xl font-semibold">Recurring Date Picker</h2>

          <RecurrenceOptions selected={recurrenceType} onChange={setRecurrenceType} />

          <DateRangeSelector
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
          />

          {recurrenceType === "weekly" && (
            <WeeklySelector selectedDays={selectedDays} onChange={setSelectedDays} />
          )}

          {recurrenceType === "monthly" && (
            <MonthlyPatternSelector />
          )}

          <CalendarPreview recurringDates={recurringDates} />
        </div>
      </div>
    </div>
  );
};

export default RecurringDatePicker;