import { expect } from 'chai';
import { describe, it } from 'mocha';
import { weddingDay } from "../weddingDay.js";

describe("Tests …", function () {

  describe("PickVenue", function () {

    it('If the value of the string location is different from "Varna"', () => {
      expect( () => weddingDay.pickVenue(200, 100, "Sofia") ).to.throw("The location of this venue is not in the correct area!");
    });

    it('If the value of the string location is = "Varna"', () => {
      expect( weddingDay.pickVenue(200, 100, "Varna") ).to.equal("This venue meets the requirements, with capacity of 200 guests and 100$ cover.");
    });

    it('If the capacity of the venue is > 150', () => {
      expect( weddingDay.pickVenue(151, 100, "Varna") ).to.equal('This venue meets the requirements, with capacity of 151 guests and 100$ cover.');
    });

    it('If the capacity of the venue is = 150', () => {
      expect( weddingDay.pickVenue(150, 100, "Varna") ).to.equal('This venue meets the requirements, with capacity of 150 guests and 100$ cover.');
    });

    it('If the capacity of the venue is < 150', () => {
      expect( weddingDay.pickVenue(149, 100, "Varna") ).to.equal('This venue does not meet your requirements!');
    });

  });

  describe("otherSpendings", function () {

    it('discount = true', () =>
      expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true)).to.equal('You spend 2465$ for wedding decoration and photography with 15% discount!'));

    it('discount = false', () =>
      expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false)).to.equal('You spend 2900$ for wedding decoration and photography!'));

    it('flowers only', () =>
      expect(weddingDay.otherSpendings(['flowers'], [], false)).to.equal('You spend 500$ for wedding decoration and photography!'));

    it('Fabric drapes and curtains only', () =>
      expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], [], false)).to.equal('You spend 400$ for wedding decoration and photography!'));

    it('pictures only', () =>
      expect(weddingDay.otherSpendings([], ['pictures'], false)).to.equal('You spend 700$ for wedding decoration and photography!'));

    it('video only', () =>
      expect(weddingDay.otherSpendings([], ['video'], false)).to.equal('You spend 1300$ for wedding decoration and photography!'));

    it('no values', () =>
      expect(weddingDay.otherSpendings([], [], false)).to.equal('You spend 0$ for wedding decoration and photography!'));

    it('weddingDecoration != array', () =>
      expect( () => weddingDay.otherSpendings('weddingDecoration', [], false)).to.throw('Invalid Information!'));

    it('photography != array', () =>
      expect( () => weddingDay.otherSpendings([], 'video', false)).to.throw('Invalid Information!'));

    it('discount != boolean', () =>
      expect( () => weddingDay.otherSpendings([], [], 'false')).to.throw('Invalid Information!'));
    // it('check if the weddingDecoration, photography and discount are not an array, array and Boolean', 
    //   expect(weddingDay.otherSpendings([], [], 'putka')).to.throw('Invalid Information!'));

  }); 

  describe("tableDistribution", function () {
    
    it('peopleOnTable < 6', () =>
      expect(weddingDay.tableDistribution(5, 1)).to.equal('There is only 5 people on every table, you can join some tables.'));

    it('peopleOnTable = 6', () =>
      expect(weddingDay.tableDistribution(6, 1)).to.equal('You have 1 tables with 6 guests on table.'));

    it('peopleOnTable > 7', () =>
      expect(weddingDay.tableDistribution(7, 1)).to.equal('You have 1 tables with 7 guests on table.'));

    it('people < 0', () =>
      expect(() => weddingDay.tableDistribution(-1, 1)).to.throw('Invalid Information!'));

    it('people != number', () =>
      expect(() => weddingDay.tableDistribution('7', 1)).to.throw('Invalid Information!'));

    it('tables <= 0', () =>
      expect(() => weddingDay.tableDistribution(7, 0)).to.throw('Invalid Information!'));

    it('tables != number', () =>
      expect(() => weddingDay.tableDistribution(7, '0')).to.throw('Invalid Information!'));

  });

});