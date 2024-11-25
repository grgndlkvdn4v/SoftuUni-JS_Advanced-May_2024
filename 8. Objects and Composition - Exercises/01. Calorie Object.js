function calorieObject(inputArr) {
  let obj = {};

  let iteratiions = 0;
  while (iteratiions < inputArr.length) {
    const key = inputArr[iteratiions++];
    const value = Number(inputArr[iteratiions++]);
    obj[key] = value;
    // console.log(key, value);
  }

  return obj;
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
