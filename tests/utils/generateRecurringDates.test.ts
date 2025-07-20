import { describe, it, expect } from "vitest";
import { generateRecurringDates } from "../../src/utils/generateRecurringDates";

describe("generateRecurringDates (based on RecurringDatePicker)", () => {
  it("generates daily dates", () => {
    const result = generateRecurringDates({
      type: "daily",
      startDate: new Date("2025-07-01"),
      endDate: new Date("2025-07-03"),
    });

    expect(result.length).toBe(3);
  });

  it("generates weekly dates with selectedDays", () => {
    const result = generateRecurringDates({
      type: "weekly",
      selectedDays: ["MO", "WE"],
      startDate: new Date("2025-07-01"),
      endDate: new Date("2025-07-15"),
    });

    expect(result.length).toBeGreaterThan(1);
    result.forEach(date => {
      const day = date.toLocaleString("en-US", { weekday: "short" }).toUpperCase().slice(0, 2);
      expect(["MO", "WE"]).toContain(day);
    });
  });

  it("generates monthly dates", () => {
    const result = generateRecurringDates({
      type: "monthly",
      startDate: new Date("2025-01-01"),
      endDate: new Date("2025-04-01"),
    });

    expect(result.length).toBe(4);
    expect(result[0].getMonth()).toBe(0); 
    expect(result[3].getMonth()).toBe(3); 
  });
});
