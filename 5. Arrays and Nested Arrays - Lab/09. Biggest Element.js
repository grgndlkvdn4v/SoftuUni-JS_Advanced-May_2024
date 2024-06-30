/**
 * @param {Array} inputArr 
 */

function biggestElement(inputArr) {
  let biggestNum = inputArr[0][0];

  let iterations = inputArr.length;
  for (let row = 0; row < iterations; row++) {
    const currArr = inputArr[row];

    const currArrLength = currArr.length
    for (let col = 0; col < currArrLength; col++) {
      const currNum = currArr[col];

      if (currNum > biggestNum)
        biggestNum = currNum
    }

  }

  console.log(biggestNum);
}

// biggestElement([
//   [20, 50, 10],
//   [8, 33, 145]
// ]);

biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4]
]);