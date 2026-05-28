import {calculator} from "./calculator.js";

//---Add---

test("Adds two numbers", () => {
  expect(calculator.add(5,2)).toBe(7);
})

test("Adds two small numbers", () => {
  expect(calculator.add(0.1,0.2)).toBeCloseTo(0.3);
})

test("Adds two large numbers", () => {
  expect(calculator.add(8000200,12341234)).toBe(20341434);
})

test("Fails to add two invalid numbers", () => {
  expect(() => calculator.add(8,"5")).toThrow();
})

//---Subtract---

test("Subtracts two numbers", () => {
  expect(calculator.subtract(5,2)).toBe(3);
})

test("Subtracts two small numbers", () => {
  expect(calculator.subtract(0.85, 0.5)).toBeCloseTo(0.35);
})

test("Subtracts two large numbers", () => {
  expect(calculator.subtract(50000, 160123)).toBe(-110123);
})

test("Fails to subtract two invalid numbers", () => {
  expect(() => calculator.subtract(8n,"5")).toThrow();
})

//---Multiply---

test("Multiplies two numbers", () => {
  expect(calculator.multiply(5,2)).toBe(10);
})

test("Multiplies two small numbers", () => {
  expect(calculator.multiply(0.2, 0.35)).toBeCloseTo(0.07);
})

test("Multiplies two large numbers", () => {
  expect(calculator.multiply(98765, 12345)).toBe(1219253925);
})

test("Fails to multiply two invalid numbers", () => {
  expect(() => calculator.multiply(8n,"5")).toThrow();
})

//---Divide---

test("Divides two numbers", () => {
  expect(calculator.divide(5,2)).toBeCloseTo(2.5);
})

test("Divides two small numbers", () => {
  expect(calculator.divide(1, 0.125)).toBeCloseTo(8);
})

test("Divides two large numbers", () => {
  expect(calculator.divide(4234, 178)).toBeCloseTo(2117/89);
})

test("Fails to divide two invalid numbers", () => {
  expect(() => calculator.divide("a",5)).toThrow();
})
