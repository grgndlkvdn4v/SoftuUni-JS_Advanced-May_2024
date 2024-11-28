function storeCatalogue(inputArr) {
  const sortedArr = inputArr.sort((a, b) => a.localeCompare(b));

  let currLetter = "";
  for (const iterator of sortedArr) {
    [productName, price] = iterator.split(" : ");
    price = Number(price);

    if (currLetter !== productName[0]) {
      currLetter = productName[0];
      console.log(currLetter);
    }

    console.log(`${productName}: ${price}`);
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
