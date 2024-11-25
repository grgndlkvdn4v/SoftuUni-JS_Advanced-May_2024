// Chat GPT help :/

function lowestPricesInCities(inputArr) {
  let productsObj = {};

  for (const iterator of inputArr) {
    let [town, product, price] = iterator.split(" | ");
    price = Number(price);

    // If the product is not in the object, or if we find a lower price, update the object
    if (!productsObj[product] || productsObj[product].price > price) {
      productsObj[product] = { town, price };
    }
  }

  for (const [key, value] of Object.entries(productsObj)) {
    console.log(`${key} -> ${value.price} (${value.town})`);
  }
}

lowestPricesInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
