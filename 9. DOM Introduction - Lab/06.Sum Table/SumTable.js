function sumTable() {

  let costElement = document.querySelectorAll(' td:nth-child(2n):not(#sum) ');
  let costArr = Array.from(costElement).map(x => Number(x.textContent));


  let sumElement = document.getElementById('sum');

  let sum = costArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
  );
  
  sumElement.textContent = sum;
}