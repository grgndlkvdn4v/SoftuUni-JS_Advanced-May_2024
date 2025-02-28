function solve(inputArr) {
  let obj = {};

  for (const entry of inputArr) {
    let [juice, quantity] = entry.split(' => ');
    if (!obj.hasOwnProperty(juice)) {
      obj[juice] = 0;
    }
    obj[juice] += Number(quantity);

  }

  for (const juice in obj) {
    console.log(juice , obj[juice]);
  }
  
}

solve([
  "Kiwi => 234",
  "Pear => 2345",
  "Watermelon => 3456",
  "Kiwi => 4567",
  "Pear => 5678",
  "Watermelon => 6789",
]);
