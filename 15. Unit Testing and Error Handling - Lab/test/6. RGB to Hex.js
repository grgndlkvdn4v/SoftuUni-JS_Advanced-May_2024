import { expect } from "chai";
import { rgbToHexColor } from "../exercises/6. RGB to Hex.js";

// describe("smoke test with valid values", () => {
//   it("same values", () => {
//     expect( rgbToHexColor(100, 100, 100) ).to.equal('#646464');
//   });

//   it("different values", () => {
//     expect( rgbToHexColor(84, 176, 210) ).to.equal('#54B0D2');
//   });
// });

// describe("border values", () => {
//   it("with 0", () => {
//     expect( rgbToHexColor(0, 0, 0) ).to.equal('#000000');
//   });

//   it("with -1", () => {
//     expect( rgbToHexColor(1, -1, 1) ).to.equal(undefined);
//   });

//   it("with 255", () => {
//     expect( rgbToHexColor(255, 255, 255) ).to.equal('#FFFFFF');
//   });

//   it("with 256", () => {
//     expect( rgbToHexColor(255, 255, 256) ).to.equal(undefined);
//   });
// });

// describe("non-numeric values", () => {

//   it("strings", () => {
//     expect( rgbToHexColor('100', '100', '100') ).to.equal(undefined);
//   });

//   it("undefined", () => {
//     expect( rgbToHexColor(undefined, undefined, undefined) ).to.equal(undefined);
//   });
  
//   it("boolean", () => {
//     expect( rgbToHexColor(false, true, false) ).to.equal(undefined);
//   });

// });
