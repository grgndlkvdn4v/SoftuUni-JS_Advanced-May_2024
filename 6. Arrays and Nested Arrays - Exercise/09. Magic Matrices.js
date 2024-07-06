function magicMatrices(matrix) {
  let isMagic = true;
  const magicSum = matrix[0].reduce((acc, currValue) => acc + currValue, 0);

  for (let row = 0; row < matrix.length; row++) {
    const currRow = matrix[row];
    const currRowSum = currRow.reduce((acc, currValue) => acc + currValue, 0);

    let currColSum = 0;
    for (let col = 0; col < matrix.length; col++) {
      currColSum += matrix[col][row];
    }

    if (currRowSum !== magicSum || currColSum !== magicSum) {
      isMagic = false;
      break;
    }
  }

  console.log(isMagic);
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);

magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
