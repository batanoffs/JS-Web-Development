function distinctArray (numbers) {
   let uniqueElementsArray = [];

   for (const number of numbers) { 
      if(!uniqueElementsArray.includes(number)) {
         uniqueElementsArray.push(number);
      }
   }
   console.log(uniqueElementsArray.join(` `));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);