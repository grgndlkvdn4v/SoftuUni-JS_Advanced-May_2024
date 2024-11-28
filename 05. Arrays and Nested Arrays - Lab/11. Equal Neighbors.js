function equalNeighbors(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      const currEl = arr[i][j];
      const rightEl = arr[i][j + 1];

      let downEl = false;
      if (i !== arr.length - 1) {
        downEl = arr[i + 1][j];
      }

      if (currEl === rightEl) {
        counter++;
      }
      if (currEl === downEl) {
        counter++;
      }
    }
  }

  console.log(counter);
}

equalNeighbors([
  [2, 3, 4, 7, 0],
  [4, 0, 5, 3, 4],
  [2, 3, 5, 4, 2],
  [9, 8, 7, 5, 4],
]);