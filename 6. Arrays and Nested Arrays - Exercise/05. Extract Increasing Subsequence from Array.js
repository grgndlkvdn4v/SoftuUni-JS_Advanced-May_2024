function extractIncreasingSubsequenceFromArray(arr) {

  let max = Number.MIN_SAFE_INTEGER;
  let outputArr = [];

  for (const num of arr) {
    if (num >= max) {
      outputArr.push(num);
      max = num;
    }
  }

  return outputArr
}
console.log(extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequenceFromArray([1, 2, 3, 1, 2, 3]));
