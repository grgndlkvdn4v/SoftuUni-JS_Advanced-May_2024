function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input) {
  let inputArr = JSON.parse(input)

  let outputArr = []
  for (const obj of inputArr) {
    let outputObj = {
      area: area.call(obj),
      volume: vol.call(obj)
    }
    
    outputArr.push(outputObj);
  }

  console.table(outputArr);
  return outputArr
}

solve(
  area, vol, `[
  {"x":"1","y":"2","z":"10"},
  {"x":"7","y":"7","z":"10"},
  {"x":"5","y":"2","z":"10"} 
  ]`
);
