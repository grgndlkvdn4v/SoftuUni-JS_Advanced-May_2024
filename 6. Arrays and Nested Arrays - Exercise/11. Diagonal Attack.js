function diagonalAttack(inputArr) {
  let d1 = 0;
  let d2 = 0;
  let diagonalsArr = [];
  let outputArr = [];

  const arrLength = inputArr.length;
  for (let row = 0; row < arrLength; row++) {
    const currRow = inputArr[row].split(" ").map((x) => Number(x));
    outputArr.push(currRow);

    d1 += currRow[row];
    d2 += currRow[arrLength - 1 - row];

    diagonalsArr.push([row, row], [row, arrLength - 1 - row]);
  }

  if (d1 !== d2) {
    console.log(inputArr.join("\n"));
  } else {
    console.log( changeNonDiagonals(outputArr)
      .join("\n")
      .replaceAll(",", " ")
    );
  }

  function changeNonDiagonals(outputArr) {
    for (let row = 0; row < outputArr.length; row++) {
      const currRow = outputArr[row];

      for (let col = 0; col < currRow.length; col++) {
        const isDiagonal = JSON.stringify(diagonalsArr).includes(
          JSON.stringify([row, col])
        );

        if (!isDiagonal) {
          outputArr[row].splice(col, 1, d1);
        }
      }
    }
    return outputArr;
  }
}

diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);

// diagonalAttack([
//   "1 1 1 1 1",
//   "2 2 2 2 2",
//   "3 3 3 3 3",
//   "4 4 4 4 4",
//   "5 5 5 5 5",
// ]);
