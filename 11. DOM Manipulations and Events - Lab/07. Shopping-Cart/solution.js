function solve() {

   let addButtonsArr = Array.from( document.querySelectorAll('button.add-product') );
   let textAreaRef = document.getElementsByTagName('textarea')[0];
   let checkoutBtnRef = document.querySelector('button.checkout');
   let list = {};

   addButtonsArr.forEach( button => button.addEventListener('click', printToTextarea) );
   checkoutBtnRef.addEventListener('click', checkout);
   

   function printToTextarea(event) {
      let wrapper = event.currentTarget.parentElement.parentElement;
      
      let productName = wrapper.querySelector('.product-title').textContent;
      let productCost = Number( wrapper.querySelector('.product-line-price').textContent );

      let writeLine = `Added ${productName} for ${productCost.toFixed(2)} to the cart.\n`;
      textAreaRef.textContent += writeLine;

      if ( !list.hasOwnProperty(productName) ) {
         list[productName] = productCost
      } else {
         list[productName] += productCost
      }
   }

   function checkout() {
      let allButtons = document.querySelectorAll('button')
      allButtons.forEach(btn => btn.setAttribute('disabled', ''));
      
      let listOfProducts = Object.keys(list).join(', '); 
      let totalPrice = Object.values(list).reduce((a,b) => a + b );
      
      let printLine = `You bought ${listOfProducts} for ${totalPrice.toFixed(2)}.`;
      textAreaRef.textContent += printLine;
   }
}