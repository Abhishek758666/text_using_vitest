import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide } from "../src/arithmetic";

describe("addition", () => {
  it("should sum two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(0, 0)).toBe(0);
    expect(add(2, -1)).toBe(1);
    expect(add(-2, -3)).toBe(-5);
  });
});
describe("subtraction", () => {
  it("should subtract two numbers", () => {
    expect(subtract(3, 2)).toBe(1);
    expect(subtract(-3, -2)).toBe(-1);
    expect(subtract(0, 0)).toBe(0);
  });
});
describe("multiply", () => {
  it("should multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, -3)).toBe(6);
    expect(multiply(2, -3)).toBe(-6);
  });
});
describe("divison", () => {
  it("should divide two numbers", () => {
    expect(divide(6, 3)).toBe(2);
  });
});
describe("throw new error", () => {
  it("should throw error", () => {
    expect(() => divide(5, 0)).toThrowError("cannot divide by 0");
  });
});
