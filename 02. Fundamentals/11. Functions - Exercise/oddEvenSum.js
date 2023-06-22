function oddEvenSum(num) {

   let numToStr = num.toString();
   let evenSum = 0;
   let oddSum = 0;

   
   for (let current = 0; current < numToStr.length; current++) {
      let element = Number(numToStr[current]);
      if (element % 2 === 0) {
         evenSum += element;
      } else {
         oddSum += element;
      }      
   }
   console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);