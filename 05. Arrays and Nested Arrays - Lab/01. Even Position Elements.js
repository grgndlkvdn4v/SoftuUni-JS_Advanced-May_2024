function evenPositionElement(inputArr) {
  let output = "";

  for (let i = 0; i < inputArr.length; i++) {
    if (i % 2 === 0) {
      const element = inputArr[i];
      output += element + " ";
    }
  }

  console.log(output);
}

evenPositionElement(["20", "30", "40", "50", "60"]);
evenPositionElement(["5", "10"]);
