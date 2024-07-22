function cityTaxes() {
  let obj = {};

  for (const iterator of inputArr) {
    let [town, population] = iterator.split(" <-> ");

    if (!obj.hasOwnProperty(town)) {
      obj[town] = 0;
    }

    obj[town] += Number(population);
  }



}

cityTaxes();
cityTaxes();