function negativePositiveNumbers(inputArr) {
  let outputArr = [];
  
  for (const num of inputArr) {
    num < 0 ? outputArr.unshift(num) : outputArr.push(num);

    // if ( num < 0) {
    //   outputArr.unshift(num);
    // } else {
    //   outputArr.push(num);
    // }
  }

  console.log( outputArr.join('\n') );
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);