function greatestCommonDivisor(num1, num2) {
  const iterations = Math.min(num1, num2);
  let gds = iterations;

  for (let divisor = iterations; divisor >= 1; divisor--) {
    const condition1 = num1 % divisor == 0;
    const condition2 = num2 % divisor == 0;

    if (condition1 && condition2) {
      gds = divisor;
      break;
    }
  }

  console.log(gds);
}

greatestCommonDivisor(2154, 458);
greatestCommonDivisor(15, 5);