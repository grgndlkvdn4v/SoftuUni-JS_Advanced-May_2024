function validityChecker(x1, y1,  x2, y2) { 

  function isInt(x1, y1,  x2, y2) {
    let expression = Math.sqrt( (x2 - x1)**2 + (y2 - y1)**2 );
    return Number.isInteger(expression)
  }
    
  let validOrInvalid;

  isInt(x1, y1, 0, 0) ? validOrInvalid = "valid" : validOrInvalid = "invalid" 
  console.log(`{${x1}, ${y1}} to {0, 0} is ${validOrInvalid}`);

  isInt(x2, y2, 0, 0) ? validOrInvalid = "valid" : validOrInvalid = "invalid" 
  console.log(`{${x2}, ${y2}} to {0, 0} is ${validOrInvalid}`);

  isInt(x1, y1, x2, y2) ? validOrInvalid = "valid" : validOrInvalid = "invalid" 
  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${validOrInvalid}`);
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);