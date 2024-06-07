// function coockingByNumbers(inputNum, op1, op2, op3, op4, op5) {
function coockingByNumbers(inputNum, ...operations) {
  
  let num = Number(inputNum);
  const arr = operations;

  for (const op of operations) {

    switch (op) {
      case "chop": num /= 2; break;
      case "dice": num = Math.sqrt(num); break;
      case "spice": num += 1; break;
      case "bake": num *= 3; break;
      case "fillet": num -= (num * 0.2); break;   
      default: break;
    }

    console.log(num);
  }
}
coockingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
// coockingByNumbers('9', 'chop', 'dice', 'spice', 'bake', 'fillet');