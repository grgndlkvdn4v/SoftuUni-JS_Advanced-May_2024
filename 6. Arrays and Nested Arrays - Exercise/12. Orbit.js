function orbit([width, height, x, y]) {

  let matrix = [];
  for (let row = 0; row < height; row++) {
    matrix[row] = [];
    for (let col = 0; col < width; col++) {
      matrix[row][col] = 0
    }
  }

  for (let row = 0; row < height; row++) {
    
    for (let col = 0; col < width; col++) {
      matrix[row][col] = Math.max( Math.abs(row - x), Math.abs(col-y)) + 1;
    }
  }

  console.table(matrix);
}
orbit([5, 5, 2, 2]);