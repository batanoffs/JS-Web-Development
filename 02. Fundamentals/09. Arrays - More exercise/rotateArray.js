function rotateArray (array) {
   let rotations = Number(array[array.length-1]);
   array.pop();
   let currentArr = [];
   for (let index = 0; index < rotations; index++) {
      currentArr = [];
      let element = array.pop();
      currentArr.push(element);
      for (let elementLeft of array) {
         currentArr.push(elementLeft);
      }
      array = currentArr;
      
   }
   console.log(currentArr.join(` `)); 
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);