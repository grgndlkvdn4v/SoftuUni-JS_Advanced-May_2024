import { describe, it } from "mocha";
import { expect } from "chai";
import { foodDelivery } from "../food delivery.js";

describe('03. Food Delivery', () => {

  describe('getCategory()', () => {
    it('category = Vegan', () => {
      expect(foodDelivery.getCategory('Vegan')).to.equal('Dishes that contain no animal products.');
    });

    it('category = Vegetarian', () => {
      expect(foodDelivery.getCategory('Vegetarian')).to.equal('Dishes that contain no meat or fish.');
    });

    it('category = All', () => {
      expect(foodDelivery.getCategory('All')).to.equal('All available dishes.');
    });

    it('category != Vegan, Vegetarian, Gluten-Free or All', () => {
      expect(() => foodDelivery.getCategory('string')).to.throw('Invalid Category!');
      expect(() => foodDelivery.getCategory(34)).to.throw('Invalid Category!');
      expect(() => foodDelivery.getCategory(true)).to.throw('Invalid Category!');
      expect(() => foodDelivery.getCategory(undefined)).to.throw('Invalid Category!');
    });
  });

  describe('addMenuItem)()', () => {
    it('price is <= maxPrice', () => {
      expect(foodDelivery.addMenuItem([{name: 'lighter', price: 10}], 10)).to.equal('There are 1 available menu items matching your criteria!');
      expect(foodDelivery.addMenuItem([{name: 'lighter', price: 9}], 10)).to.equal('There are 1 available menu items matching your criteria!');
      expect(foodDelivery.addMenuItem([{name: 'lighter', price: 11}], 10)).to.equal('There are 0 available menu items matching your criteria!');
    });

    it('invalid inputs', () => {
      expect(() => foodDelivery.addMenuItem('[{name: "lighter", price: 10}]', 10)).to.throw('Invalid Information!');
      expect(() => foodDelivery.addMenuItem([{name: "lighter", price: 10}], '10')).to.throw('Invalid Information!');
    });

    it('menuItem array has fewer than 1 item', () => {
      expect(() => foodDelivery.addMenuItem([], 10)).to.throw('Invalid Information!');
    });
    
    it('maxPrice is less than 5.', () => {
      expect(() => foodDelivery.addMenuItem([{name: "lighter", price: 4}], 3)).to.throw('Invalid Information!');
    });
  });

  describe('calculateOrderCost() ', () => {
    it('shipping, addons, and discount are valid', () => {
      expect(foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], true)).to.equal('You spend $10.63 for shipping and addons with a 15% discount!');
      expect(foodDelivery.calculateOrderCost([], [], false)).to.equal('You spend $0.00 for shipping and addons!');
    });

    it('shipping, addons, and discount are not an array, array, and boolean', () => {
      expect(() => foodDelivery.calculateOrderCost('["pedal"]', [], false)).to.throw('Invalid Information!');
      expect(() => foodDelivery.calculateOrderCost([], '["pedal"]', false)).to.throw('Invalid Information!');
      expect(() => foodDelivery.calculateOrderCost([], [], 'false')).to.throw('Invalid Information!');
    });


  });

});