  function sortingNumbers(arr) {
    let res = [];
    let sortedArr = arr.slice().sort((a, b) => a - b);

    while ( sortedArr.length ) {
      res.push( sortedArr.shift() );
      res.push( sortedArr.pop() );
    }
    
    return res
  }

console.log( sortingNumbers( [1, 65, 3, 52, 48, 63, 31, -3, 18, 56] ) );