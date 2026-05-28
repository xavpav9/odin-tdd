import {reverseString} from "./reverseString.js";

test("Reverses a string (1)", () => {
  expect(reverseString("hello")).toMatch("olleh");
});

test("Reverses a string (2)", () => {
  expect(reverseString("three")).toMatch("eerht");
});

test("Reverses a string (3)", () => {
  expect(reverseString("four")).toMatch("ruof");
});

test("Reverses a palindrome", () => {
  expect(reverseString("racecar")).toMatch("racecar");
});

test("Works with an empty string", () => {
  expect(reverseString("")).toMatch("");
});

test("Works with non-letter characters", () => {
  expect(reverseString("12-3hLaik3+}}@~")).toMatch("~@}}+3kiaLh3-21");
});
