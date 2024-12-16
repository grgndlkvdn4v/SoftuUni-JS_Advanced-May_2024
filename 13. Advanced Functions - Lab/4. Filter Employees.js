function solve(data, criteria) {
  let inputArr = JSON.parse(data);
  let [criteriaKey, criteriaValue] = criteria.split('-');

  const filteredArr = inputArr.filter(obj => obj[criteriaKey] === criteriaValue)

  for (let i = 0; i < filteredArr.length; i++) {
    const currObj = filteredArr[i];
    let output = `${i}. ${currObj.first_name} ${currObj.last_name} - ${currObj.email}`
    console.log(output);
  }
}


solve(
  `[{
"id": "1",
"first_name": "Ardine",
"last_name": "Bassam",
"email": "abassam0@cnn.com",
"gender": "Female"
}, {
"id": "2",
"first_name": "Kizzee",
"last_name": "Jost",
"email": "kjost1@forbes.com",
"gender": "Female"
},
{
"id": "3",
"first_name": "Evanne",
"last_name": "Maldin",
"email": "emaldin2@hostgator.com",
"gender": "Male"
}]`,
'gender-Female'
);

// solve(
//   `[{
// "id": "1",
// "first_name": "Kaylee",
// "last_name": "Johnson",
// "email": "k0@cnn.com",
// "gender": "Female"
// }, {
// "id": "2",
// "first_name": "Kizzee",
// "last_name": "Johnson",
// "email": "kjost1@forbes.com",
// "gender": "Female"
// }, {
// "id": "3",
// "first_name": "Evanne", 
// "last_name": "Maldin", 
// "email": "emaldin2@hostgator.com", 
// "gender": "Male" 
// }, 
// { 
// "id": "4", 
// "first_name": "Evanne", 
// "last_name": "Johnson", 
// "email": "ev2@hostgator.com", 
// "gender": "Male" 
// }
// ]`,
// 'last_name-Johnson'
// )