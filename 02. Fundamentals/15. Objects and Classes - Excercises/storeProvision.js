function storeProvision(firstArray, secondArray) {

   let stock = {};

   for (let index = 0; index < firstArray.length; index+=2) {
      let product = firstArray[index];
      let quantity = Number(firstArray[index+1]);
      stock[product] = quantity;
   }

   for (let index = 0; index < secondArray.length; index+=2 ) {
      let product = secondArray[index];
      let quantity = Number(secondArray[index+1]);
      if(!stock.hasOwnProperty(product)) {
         stock[product] = 0;
      } 
      stock[product] += quantity;
   }

   for (const productKey in stock) {
      console.log(`${productKey} -> ${stock[productKey]}`);
   }
}

storeProvision([
   'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
   [
      'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
   ]);



// storeProvision([
//    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
// ],
//    [
//       'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
//    ]);