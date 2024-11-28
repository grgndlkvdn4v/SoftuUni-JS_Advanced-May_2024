function smallerstTwoNumbers(inputArr) {
  
  const sortedArr = inputArr
    .sort( (a, b) => a - b )
    .slice(0, 2)
    .join(" ");

  console.log(sortedArr);
}
smallerstTwoNumbers([30, 15, 50, 5]);