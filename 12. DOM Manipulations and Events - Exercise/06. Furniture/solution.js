function solve() {
  let [inputTextArea, outputTextArea] = document.querySelectorAll("textarea");

  let tableBody = document.querySelector("table tbody");
  let [generateBtnRef, buyBtnRef] = document.querySelectorAll("button");

  generateBtnRef.addEventListener("click", generateTableRows);
  buyBtnRef.addEventListener("click", buy);

  function generateTableRows() {

    if(!inputTextArea.value){
      return;
    }

    let inputArr = JSON.parse(inputTextArea.value);

    for (const obj of inputArr) {
      let tr = document.createElement("tr");

      tr.innerHTML = `<td> <img src="${obj.img}"> </td>
      <td>  ${obj.name} </td>
      <td> ${obj.price} </td>
      <td> ${obj.decFactor} </td>
      <td> <input type="checkbox" /> </td>`;

      tableBody.append(tr);
    }
    debugger
  }

  function buy() {
    let inputs = tableBody.querySelectorAll("input");
    let inputsArr = Array.from(inputs).filter((input) => input.checked);

    let furnitureNames = [];
    let totalPrice = 0;
    let totalDecorationFactor = 0;

    for (const furnitureObj of inputsArr) {
      let furnitureRow = furnitureObj.parentElement.parentElement.querySelectorAll("td");

      let furnitureName = furnitureRow[1].textContent.trim();
      furnitureNames.push(furnitureName);

      let furniturePrice = Number(furnitureRow[2].textContent);
      totalPrice += furniturePrice;

      let furnitureDecorationFactor = Number(furnitureRow[3].textContent);
      totalDecorationFactor += furnitureDecorationFactor;
    }

    outputTextArea.value += `Bought furniture: ${furnitureNames
      .join(", ")
      .trim()}\n`;
    outputTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;

    averageDecorationFactor = totalDecorationFactor / inputsArr.length;
    outputTextArea.value += `Average decoration factor: ${averageDecorationFactor}`;
  }
}
