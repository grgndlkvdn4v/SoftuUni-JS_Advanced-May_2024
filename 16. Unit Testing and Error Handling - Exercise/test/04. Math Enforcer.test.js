import { expect } from "chai";
import { describe, it } from "mocha";
import {mathEnforcer} from "../Exercises/04. Math Enforcer.js";

describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("valid ineger", () => {
      expect( mathEnforcer.addFive(10) ).to.equal(15)
    });

    it("valid float", () => {
      expect( mathEnforcer.addFive(10.545) ).to.be.closeTo(15.545, 0.01)
    });

    it("non-number value", () => {
      expect( mathEnforcer.addFive('10') ).to.equal(undefined);
    });
    
    it("negative integer", () => {
      expect( mathEnforcer.addFive(-10) ).to.equal(-5);
    });
    
    it("negative float", () => {
      expect( mathEnforcer.addFive(-15.555) ).to.be.closeTo(-10.555, 0.01);
    });
  });

  describe("subtractTen", () => {

    it("valid ineger", () => {
      expect( mathEnforcer.subtractTen(15) ).to.equal(5)
    });

    it("valid float", () => {
      expect( mathEnforcer.subtractTen(15.545) ).to.be.closeTo(5.545, 0.01)
    });

    it("non-number value", () => {
      expect( mathEnforcer.subtractTen('50') ).to.equal(undefined);
    });
    
    it("negative integer", () => {
      expect( mathEnforcer.subtractTen(-5) ).to.equal(-15);
    });
    
    it("negative float", () => {
      expect( mathEnforcer.subtractTen(-15.555) ).to.be.closeTo(-25.555, 0.01);
    });
  
  });

  describe("sum", () => {
    it("valid ints", () => {
      expect( mathEnforcer.sum(10, 15) ).to.equal(25);
    });

    it("valid first num float", () => {
      expect( mathEnforcer.sum(1.333, 1) ).to.be.closeTo(2.333, 0.01);
    });

    it("valid second num float", () => {
      expect( mathEnforcer.sum(1, 1.555) ).to.be.closeTo(2.555, 0.01);
    });

    it("valid floats", () => {
      expect( mathEnforcer.sum(1.333, 1.555) ).to.be.closeTo(2.888, 0.01);
    });

    it("first param str", () => {
      expect( mathEnforcer.sum('5', 5) ).to.equal(undefined);
    });

    it("second param str", () => {
      expect( mathEnforcer.sum(5, '5') ).to.equal(undefined);
    });

    it("both param str", () => {
      expect( mathEnforcer.sum('5', '5') ).to.equal(undefined);
    });
  });
});