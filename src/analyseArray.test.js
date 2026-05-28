import {analyseArray} from "./analyseArray.js";

const arr1 = [1,2,3,4];
const arr2 = [2,5,1,7,6];

//---Average---

test("Calulates average (1)", () => {
  expect(analyseArray(arr1).average).toBeCloseTo(2.5);
});

test("Calulates average (2)", () => {
  expect(analyseArray(arr2).average).toBeCloseTo(4.2);
});

//---Min---

test("Calulates min (1)", () => {
  expect(analyseArray(arr1).min).toBeCloseTo(1);
});

test("Calulates min (2)", () => {
  expect(analyseArray(arr2).min).toBeCloseTo(1);
});

//---Max---

test("Calulates max (1)", () => {
  expect(analyseArray(arr1).max).toBe(4);
});

test("Calulates max (2)", () => {
  expect(analyseArray(arr2).max).toBe(7);
});

//---Length---

test("Calulates length (1)", () => {
  expect(analyseArray(arr1).length).toBe(4);
});

test("Calulates length (2)", () => {
  expect(analyseArray(arr2).length).toBe(5);
});

//---All values---

test("Calculates all values (1)", () => {
  const arr = [1,10000,1234,5,86,-4];
  expect(analyseArray(arr)).toEqual({
    average: 1887,
    min: -4,
    max: 10000,
    length: 6,
  });
});

test("Calculates all values (2)", () => {
  const arr = [-1, -2, -3, -4, 1, 2, 3, 4, 8, 15, -23, 1034, 12341234, -2, 64];
  expect(analyseArray(arr)).toEqual({
    average: 822_822,
    min: -23,
    max: 12341234,
    length: 15,
  });
});

test("Empty Array", () => {
  const arr = [];
  expect(analyseArray(arr)).toEqual({
    average: undefined,
    min: undefined,
    max: undefined,
    length: 0,
  });
});

test("Invalid Array", () => {
  const arr = [1, 2, 3, "a"];
  expect(() => analyseArray(arr)).toThrow("Invalid array");
});

test("Not an Array", () => {
  const arr = 5;
  expect(() => analyseArray(arr)).toThrow("Not an array");
});
