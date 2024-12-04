function solve() {
  function modify(word) {
    let wordArr = word.split("");
    wordArr[0] = wordArr[0].toUpperCase();
    const modifiedWord = wordArr.join("");
    return modifiedWord;
  }

  let resultElement = document.getElementById("result");
  resultElement.textContent = "";

  let conventionElement = document.getElementById("naming-convention");
  let textElement = document.getElementById("text");
  let text = textElement.value;
  let convention = conventionElement.value;

  let output = "";
  let textArr = text.toLowerCase().split(" ");

  switch (convention) {
    case "Camel Case":
      textArr.forEach((word, index) => {
        index === 0 ? (output = word) : (output += modify(word));
      });
      break;

    case "Pascal Case":
      textArr.forEach((word) => {
        output += modify(word);
      });
      break;

    default:
      output = "Error!";
      break;
  }

  resultElement.textContent += output;
}
