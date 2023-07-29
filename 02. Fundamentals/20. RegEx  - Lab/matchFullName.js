function matchFullName(input) {

   let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;
   let totalSum = 0;

   console.log("Bought furniture:");

   for (const el of input) {
      let result = el.match(pattern);

      if (result) {
         let items = result.groups.name;
         let price = +result.groups.price;
         let quantity = +result.groups.quantity;

         totalSum += price * quantity;
         console.log(items);

      }
   }
   console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

matchFullName(['>>Sofa<<312.23!3',
   '>>TV<<300!5',
   '>Invalid<<!5',
   'Purchase']);

// matchFullName(['>>Laptop<<312.2323!3',
// '>>TV<<300.21314!5',
// '>Invalid<<!5',
// '>>TV<<300.21314!20',
// '>>Invalid<!5',
// '>>TV<<30.21314!5',
// '>>Invalid<<!!5',
// 'Purchase']);

// matchFullName(['>Invalid<<!4',
// '>Invalid<<!2',
// '>Invalid<<!5',
// 'Purchase']);