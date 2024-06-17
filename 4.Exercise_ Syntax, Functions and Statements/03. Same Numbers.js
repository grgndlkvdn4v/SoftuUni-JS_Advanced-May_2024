function sameNumbres(input) {
  
  let areAllNumsSame = true;
  let sum = 0
  
  const inputStr = String(input)

  for (let i = 0; i < inputStr.length; i++) {
    const currDigit = inputStr[i];
    const nextDigit = inputStr[i+1];

    if (nextDigit != undefined) {
      if (currDigit != nextDigit) {
        areAllNumsSame = false;
      }
    }

    sum += +currDigit
  }

  console.log(areAllNumsSame);
  console.log(sum);
}

sameNumbres(2222222)
sameNumbres(1234)