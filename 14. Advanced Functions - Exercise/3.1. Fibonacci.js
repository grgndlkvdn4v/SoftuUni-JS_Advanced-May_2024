function getFibonator() {
  let arr = [0, 1]

  return function () {
    let next = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = next;
    return arr[0]
  }
}


let fib = getFibonator();

console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13