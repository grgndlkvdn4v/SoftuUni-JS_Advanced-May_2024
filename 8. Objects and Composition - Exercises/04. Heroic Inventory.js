function heroicInventory(inputArr) {
  let outputArr = [];

  for (const iterator of inputArr) {
    let [heroName, heroLevel, items] = iterator.split(" / ");

    items = items? items.split(", ") : [];

    const obj = {
      name: heroName,
      level: Number(heroLevel),
      items: items,
    };

    outputArr.push(obj);
  }

  console.log( JSON.stringify(outputArr) );
  console.table(outputArr);
  return JSON.stringify(outputArr)
}

heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
