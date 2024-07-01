function sumOfNUmbersFromMtoN(a, b) {
  
  const firstNum = Number(a);
  const secondNum = Number(b);
  let res = 0;

  for (let i = firstNum; i <= secondNum; i++) {
    res += i;
  }
  console.log(res);
}

sumOfNUmbersFromMtoN('1', '5');
sumOfNUmbersFromMtoN('-8', '20');