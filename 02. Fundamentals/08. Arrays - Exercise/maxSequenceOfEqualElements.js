function maxSequenceOfEqualElements (array) {

   let longestSequence = [];
   let testSequence = [];
   testSequence.push(testElement);

   
   for (let index = 0; index < array.length; index++) {
      let testElement = array[index];
      let nextElement = array[index+1];


      if(testElement === nextElement) {
         testSequence.push(nextElement);
      } else {
         testSequence.pop();
      }



      if (element === secondElement) {
         testSequence.push(secondElement);
      } else {
         testSequence.pop();
      }
   }
   console.log(testSequence);

}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequenceOfEqualElements([4, 4, 4, 4]);
// maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);