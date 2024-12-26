import { expect } from "chai";
import { createCalculator } from "../exercises/7. Add - Subtract.js";

// describe("test the calculator", () => {

//   it("with no values", () => {
//     let hui = createCalculator()
//     console.log(hui.get());

//     expect( hui.get() ).to.equal(0);
//   });
  
//   it("add functionality", () => {
//     let hui = createCalculator()
//     hui.add(5)
//     expect( hui.get() ).to.equal(5);

//     hui.add(15)
//     expect( hui.get() ).to.equal(20);

//     hui.add(-10)
//     expect( hui.get() ).to.equal(10);
//   });

//   it("substract functionality", () => {
//     let hui = createCalculator()
//     hui.subtract(5)
//     expect( hui.get() ).to.equal(-5);

//     hui.subtract(10)
//     expect( hui.get() ).to.equal(-15);
//   });


//   it("chain", () => {
//     let hui = createCalculator()
//     hui.add(5)
//     hui.add(5)
//     hui.subtract(5)
//     let chain = hui.get(hui.subtract(hui.get(hui.add(hui.get()))))
//     expect(chain).to.equal(0)
//   });

//   it("with stings", () => {
//     let hui = createCalculator()
//     expect( hui.get(hui.add('5')) ).to.equal(5)
//     expect( hui.get(hui.add('15')) ).to.equal(20)
//     expect( hui.get(hui.subtract('10')) ).to.equal(10)
//   });
  
//   it("with stings", () => {
//     let hui = createCalculator()
//     expect( typeof hui ).to.equal('object')
//     expect( hui.hasOwnProperty('add') ).to.be.true
//     expect( hui.hasOwnProperty('subtract') ).to.be.true
//     expect( hui.hasOwnProperty('get') ).to.be.true
//   });

// });