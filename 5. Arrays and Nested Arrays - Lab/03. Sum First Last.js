function sumFirstLast(input) {
  const first = Number(input.shift());
  const last = Number( input.pop() );

  const sum = first + last;
  console.log(sum);
}
sumFirstLast(['20', '30', '40']);