import { describe, it, expect } from "vitest";
import { factorial } from "../src/mathutils";

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
