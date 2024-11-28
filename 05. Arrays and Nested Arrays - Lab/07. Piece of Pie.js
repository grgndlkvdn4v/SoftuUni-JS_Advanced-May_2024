function pieceOfPie(arr, str1, str2) {

  const startIndex = arr.indexOf(str1);
  const endIndex = arr.indexOf(str2) + 1;

  const newArr = arr.slice(startIndex, endIndex); 
  
  console.log(newArr);
}

pieceOfPie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);

pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'
  ],
  'Pot Pie',
  'Smoked Fish Pie')
