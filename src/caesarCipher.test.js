import {caesarCipher} from "./caesarCipher.js";

test("Positive key, no-overflow, single lowercase letter shift (1)", () => {
  expect(caesarCipher("a", 5)).toMatch("f");
});

test("Positive key, no-overflow, single lowercase letter shift (2)", () => {
  expect(caesarCipher("m", 10)).toMatch("w");
});

test("Positive key, no-overflow, single lowercase letter shift (3)", () => {
  expect(caesarCipher("c", 2)).toMatch("e");
});

test("Positive key, overflow, single lowercase letter shift (1)", () => {
  expect(caesarCipher("x", 5)).toMatch("c");
});

test("Positive key, overflow, single lowercase letter shift (2)", () => {
  expect(caesarCipher("a", 52)).toMatch("a");
});

test("Positive key, no-overflow, multiple lowercase letter shift", () => {
  expect(caesarCipher("abcd", 8)).toMatch("ijkl");
});

test("Positive key, no-overflow, multiple letter shift", () => {
  expect(caesarCipher("aBcD", 9)).toMatch("jKlM");
});

test("Positive key, overflow, multiple letter shift", () => {
  expect(caesarCipher("asdF", 80)).toMatch("cufH");
});

test("Positive key, no-overflow, multiple character shift", () => {
  expect(caesarCipher("abcdABCD1234!", 1)).toMatch("bcdeBCDE1234!");
});

test("Negative key, no-overflow, multiple character shift", () => {
  expect(caesarCipher("abcdABCD1234!", -1)).toMatch("zabcZABC1234!");
});

test("Negative key, overflow, multiple character shift", () => {
  expect(caesarCipher("a1b2xyz", -500)).toMatch("u1v2rst");
});

test("Empty string", () => {
  expect(caesarCipher("", 8)).toMatch("");
});
