import { formatDate } from '../index';

describe('formatDate', () => {
  it('should format date correctly to YYYY-MM-DD', () => {
    const date = new Date('2024-01-01T00:00:00Z');
    expect(formatDate(date)).toBe('2024-01-01');
  });

  it('should format today correctly', () => {
    const today = new Date();
    const expected = today.toISOString().split('T')[0];
    expect(formatDate(today)).toBe(expected);
  });
});
