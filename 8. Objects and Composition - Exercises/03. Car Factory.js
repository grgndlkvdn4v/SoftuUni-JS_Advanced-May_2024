function carFactory(carObj) {
  const output = {model: carObj.model}

  const engines = {
    smallEngine: { power: 90, volume: 1800 },
    normalEngine: { power: 120, volume: 2400 },
    monsterEngine: { power: 200, volume: 3500 }
  }

  if (carObj.power <= 90) {
    output.engine = Object.assign({}, engines.smallEngine)
  } else if (carObj.power <= 120) {
    output.engine = Object.assign({}, engines.normalEngine)
  } else if (carObj.power >= 200) {
    output.engine = Object.assign({}, engines.monsterEngine)
  }

  const assignColorAndCarrige = (color, type) => {
    return obj = {color, type}
  }

  output.carriage = assignColorAndCarrige(carObj.color, carObj.carriage);

  let determineWheelsSize = () => { return carObj.wheelsize % 2 === 0 ? --carObj.wheelsize : carObj.wheelsize }

  const wheelsSize = determineWheelsSize(carFactory.wheelsize)
  output.wheels = new Array(4).fill(wheelsSize)

  console.log(output);
  return output
}

carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
