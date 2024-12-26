import { expect } from "chai";
import { isSymmetric } from "../exercises/5. Check for Symmetry";

// describe("check symertry for array inputs", () => {
//   it("five simetric numbers", () => {
//     expect(isSymmetric([1, 2, 3, 2, 1])).to.equal(true);
//   }); // true

//   it("five non-symmetric numbers", () => {
//     expect(isSymmetric([1, 2, 3, 4, 5])).to.equal(false);
//   }); // false

//   it("single number symmetry", () => {
//     expect(isSymmetric([1])).to.equal(true);
//   }); // true

//   it("two symmetric numbers", () => {
//     expect(isSymmetric([1, 1])).to.equal(true);
//   }); // true

//   it("two non-symmetric numbers", () => {
//     expect(isSymmetric([1, 2])).to.equal(false);
//   }); // false
  
// });

// describe("check for inputs different than arrays", () => {
//   it("string", () => {
//     expect(isSymmetric('asd')).to.equal(false);
//   });

//   it("number", () => {
//     expect(isSymmetric(69)).to.equal(false);
//   });

//   it("undefined", () => {
//     expect(isSymmetric(undefined)).to.equal(false);
//   });

//   it("Infinity", () => {
//     expect(isSymmetric(Infinity)).to.equal(false);
//   });

//   it("Boolean", () => {
//     expect(isSymmetric(true)).to.equal(false);
//   });

// });