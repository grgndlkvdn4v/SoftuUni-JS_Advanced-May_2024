// '+', '-', '*', '/', '%', '**'

function mathOperation(numOne, numTwo, str) {

  let res;

  switch (str) {
    case '+': res = numOne + numTwo; break;
    case '-': res = numOne - numTwo; break;
    case '*': res = numOne * numTwo; break;
    case '/': res = numOne / numTwo; break;
    case '%': res = numOne % numTwo; break;
    case '**': res = numOne ** numTwo; break;
    default: res = 'defaut'; break;
  }

  console.log(res);
}

mathOperation(10, 3, '**');