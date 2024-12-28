import { expect } from "chai";
import { describe, it } from "mocha";
import { isOddOrEven } from "../Exercises/02. Even or Odd.js";

describe("testing if the input is even or odd", () => {
  it("1 number", () => {
    expect(isOddOrEven('2')).to.equal('odd');
  });

  it("2 number", () => {
    expect(isOddOrEven('10')).to.equal('even');
  });

  it("3 numbers", () => {
    expect(isOddOrEven('101')).to.equal('odd');
  });
  
  it("empty string", () => {
    expect(isOddOrEven('')).to.equal('even');
  });
});

describe("testing with non-string values", () => {
  it("number", () => {
    expect(isOddOrEven(2)).to.equal(undefined);
  });

  it("boolean", () => {
    expect(isOddOrEven(true)).to.equal(undefined);
  });

  it("infinity", () => {
    expect(isOddOrEven(Infinity)).to.equal(undefined);
  });

  it("array", () => {
    expect(isOddOrEven([1,'1'])).to.equal(undefined);
  });
});
