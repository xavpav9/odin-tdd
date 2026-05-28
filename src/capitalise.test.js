import {capitalise} from "./capitalise.js";

test("Capitalises first letter (1)", () => {
  expect(capitalise("hello")).toMatch("Hello");
});

test("Capitalises first letter (2)", () => {
  expect(capitalise("one")).toMatch("One");
});

test("Capitalises first letter (3)", () => {
  expect(capitalise("two")).toMatch("Two");
});

test("Uncapitalises non-first letters", () => {
  expect(capitalise("tWO")).toMatch("Two");
});

test("Works with an empty string", () => {
  expect(capitalise("")).toMatch("");
});

test("Works with non letter characters", () => {
  expect(capitalise("ab2(faB3}")).toMatch("Ab2(fab3}");
});
