import { describe, it, expect } from "vitest";
import { generateRecurringDates } from "../../src/utils/generateRecurringDates";

describe("generateRecurringDates", () => {
  it("should generate daily dates within range", () => {
    const dates = generateRecurringDates({
      type: "daily",
      startDate: new Date("2025-07-01"),
      endDate: new Date("2025-07-03"),
    });

    expect(dates.map(d => d.toISOString().slice(0, 10))).toEqual([
      "2025-07-01",
      "2025-07-02",
      "2025-07-03",
    ]);
  });

  it("should generate weekly dates on selected days", () => {
    const dates = generateRecurringDates({
      type: "weekly",
      startDate: new Date("2025-07-01"),
      endDate: new Date("2025-07-10"),
      selectedDays: ["Tue", "Thu"], // Only include Tue & Thu
    });

    expect(dates.map(d => d.toISOString().slice(0, 10))).toEqual([
      "2025-07-02", // Thu
      "2025-07-04", // Tue
      "2025-07-09",
    ]);
  });

  it("should generate monthly recurring dates", () => {
    const dates = generateRecurringDates({
      type: "monthly",
      startDate: new Date("2025-01-15"),
      endDate: new Date("2025-04-15"),
    });

    expect(dates.map(d => d.toISOString().slice(0, 10))).toEqual([
      "2025-01-15",
      "2025-02-15",
      "2025-03-15",
      "2025-04-15",
    ]);
  });

  it("should generate yearly recurring dates", () => {
    const dates = generateRecurringDates({
      type: "yearly",
      startDate: new Date("2023-01-01"),
      endDate: new Date("2026-01-01"),
    });

    expect(dates.map(d => d.toISOString().slice(0, 10))).toEqual([
      "2023-01-01",
      "2024-01-01",
      "2025-01-01",
      "2026-01-01",
    ]);
  });
});