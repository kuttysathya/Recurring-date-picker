import { describe, it, expect } from 'vitest';
import { generateRecurringDates } from '../../../src/utils/generateRecurringDates';

describe('generateRecurringDates', () => {
  it('generates daily recurring dates', () => {
    const result = generateRecurringDates({
      type: 'daily',
      startDate: new Date('2025-07-01'),
      endDate: new Date('2025-07-03'),
    });

    expect(result.map(d => d.toDateString())).toEqual([
      new Date('2025-07-01').toDateString(),
      new Date('2025-07-02').toDateString(),
      new Date('2025-07-03').toDateString(),
    ]);
  });

  it('generates weekly recurring dates on Mon and Wed only', () => {
    const result = generateRecurringDates({
      type: 'weekly',
      startDate: new Date('2025-07-01'),
      endDate: new Date('2025-07-10'),
      selectedDays: ['Mon', 'Wed'],
    });

    expect(result.map(d => d.toDateString())).toEqual([
      new Date('2025-07-02').toDateString(),
      new Date('2025-07-07').toDateString(),
      new Date('2025-07-09').toDateString(),
    ]);
  });

  it('generates monthly recurring dates', () => {
    const result = generateRecurringDates({
      type: 'monthly',
      startDate: new Date('2025-07-01'),
      endDate: new Date('2025-09-01'),
    });

    expect(result.map(d => d.toDateString())).toEqual([
      new Date('2025-07-01').toDateString(),
      new Date('2025-08-01').toDateString(),
      new Date('2025-09-01').toDateString(),
    ]);
  });

  it('generates yearly recurring dates', () => {
    const result = generateRecurringDates({
      type: 'yearly',
      startDate: new Date('2025-07-01'),
      endDate: new Date('2026-07-01'),
    });

    expect(result.map(d => d.toDateString())).toEqual([
      new Date('2025-07-01').toDateString(),
      new Date('2026-07-01').toDateString(),
    ]);
  });
});
