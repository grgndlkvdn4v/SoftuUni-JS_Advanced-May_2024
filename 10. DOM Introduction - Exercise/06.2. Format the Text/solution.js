function solve() {
  let outputElement = document.getElementById("output");
  const textAreaElement = document.getElementById("input");
  const text = textAreaElement.textContent;

  const textArr = text.split(".").filter((el) => el !== "");

  let sentancesArr = [];
  for (const sentance of textArr) {
    sentancesArr.push(sentance);

    if (sentancesArr.length % 3 === 0) {
      let paragraph = document.createElement("p");
      paragraph.textContent = sentancesArr.join(".").trim() + ".";
      outputElement.appendChild(paragraph);

      sentancesArr = [];
    }
  }
}
