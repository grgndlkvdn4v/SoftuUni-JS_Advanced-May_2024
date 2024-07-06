function solve(inputArr, step) {
  const outputArr = inputArr.filter((_, i) => i % step === 0);
  // console.log(outputArr);
  return outputArr
}

solve(["5", "20", "31", "4", "20"], 2);
solve(["1", "2", "3", "4", "5"], 6);