export type RecurrenceType = "daily" | "weekly" | "monthly" | "yearly";

interface GenerateRecurringDatesParams {
  type: RecurrenceType;
  startDate: Date;
  endDate?: Date;
  selectedDays?: string[]; // ['Mon', 'Wed']
}

export const generateRecurringDates = ({
  type,
  startDate,
  endDate,
  selectedDays = [],
}: GenerateRecurringDatesParams): Date[] => {
  const result: Date[] = [];
  const current = new Date(startDate);
  const finalDate = endDate ? new Date(endDate) : new Date(startDate);
  finalDate.setFullYear(finalDate.getFullYear() + 1); // fallback: 1 year

  while (current <= finalDate) {
    const day = current.getDay(); // 0 = Sun
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][day];

    if (
      (type === "daily") ||
      (type === "weekly" && selectedDays.includes(weekday)) ||
      type === "monthly" ||
      type === "yearly"
    ) {
      result.push(new Date(current));
    }

    // Move to next
    if (type === "daily" || type === "weekly") current.setDate(current.getDate() + 1);
    else if (type === "monthly") current.setMonth(current.getMonth() + 1);
    else if (type === "yearly") current.setFullYear(current.getFullYear() + 1);
  }

  return result;
};