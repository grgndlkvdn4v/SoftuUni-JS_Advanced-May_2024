// https://softuni.bg/trainings/resources/officedocument/98035/objects-and-composition-exercises-js-advanced-may-2024/4543

function storeCatalogue(inputArr) {
  let store = {};
  const sortedArr = inputArr.sort((a, b) => a.localeCompare(b));

  let currLetter = "";
  for (const iterator of sortedArr) {
    [productName, price] = iterator.split(" : ");
    price = Number(price);

    if (currLetter !== productName[0]) {
      currLetter = productName[0];
    }

    if ( !store.hasOwnProperty(currLetter) ) {
      store[currLetter] = {};
    }

    store[currLetter][productName] = price;
  }

  debugger //demo 
  // hover over the object on row 2 or to the array on row 3 to better see the contents 

  // print
  for (const [letter, object] of Object.entries(store)) {
    console.log(letter);
    for (const [product, price] of Object.entries(object)) {
      console.log( "  " + product + ": " + price );
    }
  }

}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
