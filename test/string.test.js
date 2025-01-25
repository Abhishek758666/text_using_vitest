import { describe, expect, it } from "vitest";
import { reverse, toUppercase } from "../src/string";

describe("return uppercase string", () => {
  it("r", () => {
    expect(toUppercase("hello")).toBe("HELLO");
  });
});
describe("return reversed string", () => {
  it("r", () => {
    expect(reverse("hello")).toBe("olleh");
  });
});
