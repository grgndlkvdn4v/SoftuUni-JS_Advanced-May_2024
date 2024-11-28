/**
 *
 * @param {Object} library {}
 * @param {Array} orders []
 */

// You must create and return a new array, by fulfilling all orders from the orders array. To fulfill an order, create a copy of the object’s template and then add to it all functions, listed in the parts array of the order, by taking them from the function library (the first parameter to your solution).

function factory(library, orders) {
  let result = [];

    for (const order of orders) {
      let obj = {...order.template};  // copy the name into new object (shallow copyw)

      for (const part of order.parts) {
        obj[part] = library[part];  // add the orders to the obj.
      }

      result.push(obj);
    }

  return result
}


const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};

const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];

const products = factory(library, orders);
console.log(products);