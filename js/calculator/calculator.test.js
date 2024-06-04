const calculator = require('./calculator');

describe('Calculator Functions', () => {
  describe('add function', () => {
test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
})});
describe('divide function', () => {
  test('divide 9 by 3 to equal 3', () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });

  test('divide by 0 should return Infinity', () => {
    expect(calculator.divide(10, 0)).toBe(Infinity);
  });});

describe('subtract function', () => {
test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
})});

describe('multiply function', () => {
test('multiply -5  by -10 to equal 50', () => {
  expect(calculator.multiply(-5, -10)).toBe(50);
})})});