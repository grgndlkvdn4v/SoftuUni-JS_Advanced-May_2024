function townPopulation(inputArr) {
  let obj = {};

  for (const iterator of inputArr) {
    let [town, population] = iterator.split(" <-> ");

    if (!obj.hasOwnProperty(town)) {
      obj[town] = 0;
    }

    obj[town] += Number(population);
  }

  for (const key in obj) {
    console.log(key + " : " + obj[key]);
  }
}

townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
// townPopulation([
//   "Istanbul <-> 100000",
//   "Honk Kong <-> 2100004",
//   "Jerusalem <-> 2352344",
//   "Mexico City <-> 23401925",
//   "Istanbul <-> 1000",
// ]);
