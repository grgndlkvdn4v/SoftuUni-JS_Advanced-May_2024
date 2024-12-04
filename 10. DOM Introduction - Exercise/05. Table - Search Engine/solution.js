function solve() {
   document.querySelector("#searchBtn").addEventListener("click", onClick);

   let trElements = document.querySelectorAll("tbody tr");

   function onClick() {
      let inputText = document.querySelector("input#searchField").value;
      let trElementsArr = Array.from(trElements);

      for (const row of trElementsArr) {
         let trElement = row.querySelectorAll("td");
         for (const data of trElement) {
            let dataContent = data.textContent;

            if (dataContent.includes(inputText)) {
               row.classList.add("select");
               break;
            } else {
               row.classList.remove("select");
            }
         }
      }
   }
}
