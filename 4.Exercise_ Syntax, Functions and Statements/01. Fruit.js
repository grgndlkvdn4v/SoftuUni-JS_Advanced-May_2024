
function hui(fruit, weight, price) {
  const weight_KG = (weight / 1000).toFixed(2);
  const total = (weight_KG * price).toFixed(2);

  const output = `I need $${total} to buy ${weight_KG} kilograms ${fruit}.`
  console.log(output);
}

// hui ('orange', 2500, 1.80);
// hui('apple', 1563, 2.35);

hui ('orange', 50, 1.80);