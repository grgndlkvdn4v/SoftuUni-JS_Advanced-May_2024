// Write a JS function that takes three string arguments as an input. Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.

function stringLength(str1, str2, str3) {
  
  const firstStrLength = str1.length;
  const secondStrLength = str2.length;
  const thirdStrLength = str3.length;

  const sum = firstStrLength + secondStrLength + thirdStrLength;
  const avarage = Math.floor(sum / 3);

  console.log(sum);
  console.log(avarage);
}

stringLength('chocolate', 'ice cream', 'cake');