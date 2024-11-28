function addAndRemoveElements(inputArr) {
  let outputArr = [];

  for (let i = 1; i <= inputArr.length; i++) {
    const command = inputArr[i - 1];
    switch (command) {
      case "add":
        outputArr.push(i);
        break;
      case "remove":
        outputArr.pop();
        break;
    }
  }

  if (outputArr.length) {
    console.log(outputArr.join("\n"));
  } else {
    console.log("Empty");
  }

}

addAndRemoveElements(["add", "add", "remove", "add", "add"]);
addAndRemoveElements(["remove", "remove", "remove"]);
