function search() {
   function clearSearch(listItemsArr) {
      for (const town of listItemsArr) {
         town.style.fontWeight = "";
         town.style.textDecoration = "";
      }
   }

   let searchWord = document.getElementById('searchText').value;   
   let ulElement = document.querySelector('ul#towns');

   let listItems = ulElement.getElementsByTagName('li');
   let listItemsArr = Array.from(listItems);

   clearSearch(listItemsArr);
   
   let matches = 0
   for (const town of listItemsArr) {
      if ( town.textContent.includes(searchWord) ) {
         matches++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }

   let searchResultsElement = document.getElementById('result');
   searchResultsElement.textContent = `${matches} matches found`;
}
