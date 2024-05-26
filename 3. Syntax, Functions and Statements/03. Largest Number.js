// Write a function that takes three number arguments as input and finds the largest of them. Print the following text on the console:  `The largest number is {number}.`.

function largestNumber(numOne, numTwo, numThree) {
  
  const arr = [numOne, numTwo, numThree]
  let max = Number.MIN_SAFE_INTEGER;
  
  for (let i = 0; i < 3; i++) {
    const currNum = arr[i];

    if (currNum > max) {
      max = currNum;
    }
  }

  console.log(`The largest number is ${max}.`);
}

largestNumber(-3, -5, -22,5);

// could be also done with Math.max()