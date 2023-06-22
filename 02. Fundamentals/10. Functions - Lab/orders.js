function orders (product,quantity) {
   let productPrize = 0;
   switch (product) {
      case "coffee":
         productPrize = 1.50;
         break;
      case "water":
         productPrize = 1;
         break;
      case "coke":
         productPrize = 1.4;
         break;
      case "snacks":
         productPrize = 2;
         break;      
   }

   let total = productPrize * quantity;
   console.log(total.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);