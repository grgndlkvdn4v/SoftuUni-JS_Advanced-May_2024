function wordsUppercase(text) {

  let regexp = /\b[A-Za-z]+\b/g;
  const matches = text.match(regexp);

  let outputArr = [];
  for (const iterator of matches) {
    outputArr.push( iterator.toUpperCase())
  }
  console.log(outputArr.join(", "));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');


// function test(text) {
//   const regexp = /[^\w+]/g;
//   let output = text
//                   .toUpperCase()
//                   .split(regexp)
//                   .filter(x=>!!x)
//                   .join(", ");
//   console.log(output);
// }