let firstZeroTest = solution();

function solution() {
  let internalString = '';
  
  // Returning an object with methods that use closures
  return {
    append: function (string) {
      internalString += string; // Append the string
    }, 
    removeStart: function (n) {
      internalString = internalString.slice(n)
    },
    removeEnd: function (n) {
      internalString = internalString.slice(0, -n)
    },
    print: function () {
      console.log(internalString); // Print the string
  }
  }
}

firstZeroTest.append('hello');

firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();