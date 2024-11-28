function aggregateElements(arr) {
  let sum = 0;
  let invValuesSum = 0;
  let concat = "";
  
  for (const iterator of arr) {
    sum += iterator;
    invValuesSum += 1 / iterator;
    concat += iterator;
  }
  
  console.log(sum);
  console.log(invValuesSum);
  console.log(concat);
}

aggregateElements([1, 2, 3]);