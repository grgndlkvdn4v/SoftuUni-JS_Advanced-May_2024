function solution() {

  let stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0
  }
  
  recipesLibrary = {
    apple: {carbohydrate: 1, flavour: 2}, 
    lemonade: {carbohydrate: 10, flavour: 20},
    burger: {carbohydrate: 5, fat: 7, flavour: 3},
    eggs: {protein: 5, fat: 1, flavour: 1},
    turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
  };

  let message = '';
  let commands = {

    restock: function (microelement, quantity) {
      stock[microelement] += quantity;
      message = 'Success';
    },

    prepare: function (recipe, quantity) {
      let haveStock = true;
      let currRecipieObj = recipesLibrary[recipe];
      
      // check if there is enough stock
      for (const microelement in currRecipieObj) {
        let qnty = currRecipieObj[microelement]

        if ( qnty > stock[microelement] ) {
          message = `Error: not enough ${microelement} in stock`;
          haveStock = false;
          break;
        }
      }

      // if stock is available substrack the stock
      if (!haveStock) { return message }

      for (const microelement in currRecipieObj) {
        let qnty = currRecipieObj[microelement]
        stock[microelement] -= qnty;
      }

      message = 'Success';
      return message
    },

    report: function () {
      message = ''
      for (const microelement in stock) {
        message += `${microelement}=${stock[microelement]} `
      }
      return message
    }
  }

  return function (input) {

    let [command, item, quantity] = input.split(' ');
    quantity = Number(quantity);
    
    switch (command) {
      case 'restock': commands.restock(item, quantity); break;
      case 'prepare': commands.prepare(item, quantity); break;
      case 'report': commands.report(); break;
    } 
    
    return message
  }

}

let manager = solution ();

{
console.log(manager ('restock carbohydrate 10'));
console.log(manager ('restock flavour 10'));
console.log(manager ('prepare apple 1'));
console.log(manager ('restock fat 10'));
console.log(manager ('prepare burger 1'));
console.log (manager ("report"));
}

// {
//   console.log (manager ("prepare turkey 1")); // Error: not enough protein in stock
//   console.log (manager ("restock protein 10")); // Success
//   console.log (manager ("prepare turkey 1")); // Error: not enough carbohydrate in stock
//   console.log (manager ("restock carbohydrate 10")); // Success
//   console.log (manager ("prepare turkey 1")); // Error: not enough fat in stock
//   console.log (manager ("restock fat 10")); // Success
//   console.log (manager ("prepare turkey 1")); // Error: not enough flavour in stock
//   console.log (manager ("restock flavour 10")); // Success
//   console.log (manager ("prepare turkey 1")); // Success
//   console.log (manager ("report")); // protein=0 carbohydrate=0 fat=0 flavour=0
// }


// {
//   console.log (manager ("restock flavour 50")); // Success
//   console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock
//   console.log (manager ("restock carbohydrate 10")); // Success
//   console.log (manager ("restock flavour 10")); // Success
//   console.log (manager ("prepare apple 1")); // Success
//   console.log (manager ("restock fat 10")); // Success
//   console.log (manager ("prepare burger 1")); // Success
//   console.log (manager ("report")); // protein=0 carbohydrate=4 fat=3 flavour=55
// }