import { describe, it, expect } from "vitest";
import { factorial, fibonacciSeries, findGCD } from "../src/mathutils";

describe("factorial", () => {
  it("return factorial", () => {
    expect(factorial(0)).toBe(1);
  });
});
describe("factorial error", () => {
  it("throw error", () => {
    expect(() => factorial(-1)).toThrow("cannot find factorial of -ve number");
  });
});

describe("find gcd", () => {
  it("find gcd", () => {
    expect(findGCD(56, 98)).toBe(14);
  });
});

describe("print fibo", () => {
  it("should print fibo upto nth terms", () => {
    expect(() => fibonacciSeries(4).toBe([0, 1, 1, 2]));
  });
});
