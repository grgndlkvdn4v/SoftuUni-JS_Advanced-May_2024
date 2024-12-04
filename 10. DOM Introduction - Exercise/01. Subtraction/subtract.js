function subtract() {
    let numOneElement = document.getElementById('firstNumber');
    let numTwoElement = document.getElementById('secondNumber');

    const num1 = Number(numOneElement.value);
    const num2 = Number(numTwoElement.value);

    const result = num1 - num2; 

    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}