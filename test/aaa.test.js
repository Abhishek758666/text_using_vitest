import { describe, it, expect } from "vitest";

describe("math test", () => {
  it("should return", () => {
    // arrange
    const a = 1;
    const b = 1;

    // act
    const result = a + b;

    //assert
    expect(result).toBe(2);
  });
});
