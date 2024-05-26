function squareOfStras(size = 5) {
    for (let n = 1; n <= size; n++) {
      const row = '* '.repeat(size);
      console.log(row);
    }
}

squareOfStras(4);