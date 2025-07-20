export type RecurrenceType = "daily" | "weekly" | "monthly";

interface Options {
  type: RecurrenceType;
  startDate: Date;
  endDate?: Date;
  selectedDays?: string[]; 
}

export function generateRecurringDates(options: Options): Date[] {
  const { type, startDate, endDate, selectedDays } = options;
  const dates: Date[] = [];

  const current = new Date(startDate);

  while (!endDate || current <= endDate) {
    if (type === "daily") {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    else if (type === "weekly") {
      if (selectedDays && selectedDays.length > 0) {
        for (let i = 0; i < 7; i++) {
          const next = new Date(current);
          next.setDate(current.getDate() + i);
          const dayStr = dayToString(next.getDay()); // convert to "MO", etc.
          if (selectedDays.includes(dayStr)) {
            if (!endDate || next <= endDate) {
              dates.push(new Date(next));
            }
          }
        }
        current.setDate(current.getDate() + 7);
      } else {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 7);
      }
    }

    else if (type === "monthly") {
      dates.push(new Date(current));
      current.setMonth(current.getMonth() + 1);
    }

    // Stop loop if no endDate and dates are getting too long
    if (!endDate && dates.length >= 100) break;
  }

  return dates;
}

function dayToString(day: number): string {
  const map = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return map[day];
}
