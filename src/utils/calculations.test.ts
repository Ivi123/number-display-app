import { calculateArea } from './calculations';

test('calculates the area of a triangle correctly', () => {
  expect(calculateArea(10, 5)).toBe(25);
  expect(calculateArea(0, 5)).toBe(0);
  expect(calculateArea(10, 0)).toBe(0);
  expect(calculateArea(7, 3)).toBe(10.5);
});
