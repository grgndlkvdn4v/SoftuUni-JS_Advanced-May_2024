import { expect } from "chai";
import { describe, it } from "mocha"
import { lookupChar } from "../Exercises/03. Char Lookup.js";

const testString = 'Lorem ipsum dolor sit.'
const length = testString.length
const incorrerIndexMessage = 'Incorrect index';

describe("Returning undefined", () => {
  it("first parameter is not a string", () => {
    expect( lookupChar(123456789, 4) ).to.equal(undefined);
  });
  
  it("second parameter is not a number", () => {
    expect( lookupChar(testString, '4') ).to.equal(undefined);
  });
    
  it("second parameter is a floating number", () => {
    expect( lookupChar(testString, 4.25) ).to.equal(undefined);
  });

  it("both params are incorrect data types", () => {
    expect( lookupChar(123456789, true) ).to.equal(undefined);
  });
});


describe("Returning an Incorrect index", () => {
  it("bigger than the string length", () => {
    expect( lookupChar(testString, 25) ).to.equal(incorrerIndexMessage);
  });

  it("equal to the string length", () => {
    expect( lookupChar(testString, length) ).to.equal(incorrerIndexMessage);
  });
});


describe("Returning the char at the specified index", () => {
  it("border value with start index", () => {
    expect( lookupChar(testString, 0) ).to.equal('L');
  });

  it("valid middle value", () => {
    expect( lookupChar(testString, 10) ).to.equal('m');
  });

  it("end border value with end index", () => {
    expect( lookupChar(testString, 21) ).to.equal('.');
  });
});
