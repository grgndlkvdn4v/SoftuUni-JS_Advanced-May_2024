// For each string, create a div with a paragraph with the string in it

function create(words) {
   let element = document.querySelector("div#content");

   for (const word of words) {
      let newParagraphElement = document.createElement("p");
      newParagraphElement.textContent = word;
      newParagraphElement.style.display = "none";

      let newDivElement = document.createElement("div");

      newDivElement.append(newParagraphElement);
      element.append(newDivElement);

      newDivElement.addEventListener("click", unhideContent);
   }

   function unhideContent(event) {
      let divElement = event.currentTarget;
      let pElement = divElement.querySelector("p");
      pElement.style.display = "block";
   }
}
