import { assert, expect } from 'chai';
import { beforeEach, describe, it } from "mocha";
import { PaymentPackage } from '../12. Payment Package.js';
// import { PaymentPackage } from '/18. Classes - Exercise/12. Payment Package/12. Payment Package.js';

describe("", () => {

  let paymentPackage;
  beforeEach( () => 
    paymentPackage = new PaymentPackage('Pesho', 500)
  );

  it("namaikatiputkata", () => {
    expect( paymentPackage.name ).to.equal('Pesho');
    // expect(  ).to.equal();
  });
  
  it("hui", () => {
    assert.equal( paymentPackage.name, 'Pesho' )
  });
  
});