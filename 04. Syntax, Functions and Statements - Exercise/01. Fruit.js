
function hui(fruit, weight, price) {
  const weight_KG = (weight / 1000);
  const total = (weight_KG * price);

  const output = `I need $${total.toFixed(2)} to buy ${weight_KG.toFixed(2)} kilograms ${fruit}.`
  console.log(output);
}

hui ('orange', 2500, 1.80);
// hui('apple', 1563, 2.35);
// hui ('orange', 50, 1.80);