function townsToJSON(inputArr) {
  function roundUp(input) {
    let str = Number(input).toFixed(2);

    if (str[4] == "0") {
      str = Number(str).toFixed(1);
    }

    return Number(str);
  }

  let arr = [];

  let [town, lat, lon] = inputArr[0].replaceAll("|", "").trim().split("  ");

  for (let index = 1; index < inputArr.length; index++) {
    let [currTown, currLat, currLon] = inputArr[index]
      .replaceAll("|", "")
      .trim()
      .split("  ");

    const obj = {
      [town]: currTown,
      [lat]: roundUp(currLat),
      [lon]: roundUp(currLon),
    };

    arr.push(obj);
  }

  return JSON.stringify(arr)
  console.log(JSON.stringify(arr));
}

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);3