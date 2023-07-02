function maxSequenceOfEqualElements (array) {

   let longestSequence = [];
   let testSequence = [];
   testSequence.push(array[0]);

   
   for (let index = 0; index < array.length; index++) {
      let testElement = array[index];
      let nextElement = array[index+1];


      if(testElement === nextElement) {
         if(testSequence[0] === undefined) {
            testSequence.push(testElement);
         }
         testSequence.push(nextElement);         
      } else {
         if (longestSequence.length < testSequence.length) {
            longestSequence = testSequence;
            testSequence = [];
         } else {
            testSequence = [];
         }
      }
   }
   console.log(longestSequence.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);