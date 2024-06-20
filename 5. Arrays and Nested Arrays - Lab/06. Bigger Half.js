function biggerHalf(inputArr) {
  const middleIndex = Math.floor(inputArr.length / 2);
  
  let outputArr = inputArr
    .sort( (a, b) => a - b)
    .slice(middleIndex);

  console.log(outputArr);
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);