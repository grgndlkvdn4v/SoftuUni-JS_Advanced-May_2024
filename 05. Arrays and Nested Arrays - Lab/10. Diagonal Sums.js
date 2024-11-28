function diagonalSums(inputArr) {
  let firstDiagonal = [];
  let secondDiagonal = [];

  for (let i = 0; i < inputArr.length; i++) {
    firstDiagonal.push(inputArr[i][i]);
    secondDiagonal.push(inputArr[i][inputArr.length - 1 - i]);
  }

  const firstSum = firstDiagonal.reduce((acc, el) => acc + el, 0 );
  const secondSum = secondDiagonal.reduce((acc, el) => acc + el, 0 );

  console.log(firstSum, secondSum);
}

diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
