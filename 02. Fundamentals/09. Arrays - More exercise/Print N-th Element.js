function printNthElement (array) {
   let steps = Number(array[array.length-1]);   
   let finalArray = [];
   for (let index = 0; index < array.length-1; index = index + steps) {
      let element = array[index];
      
      finalArray.push(element);
      
      
   }
   console.log(finalArray.join(` `));
}
printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);