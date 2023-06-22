function equalSums (array) {
   let prevSum = 0;
   let nextSum = 0;
   let flag = false;
   if (array.length === 1) {
      console.log(0);
      return;
   }
   for (let index = 1; index < array.length; index++) {
      
      for (let j = index + 1; j < array.length; j++) {
         let nextElement = array [j];
         nextSum += nextElement;
      }
      for (let k = index - 1; k >= 0; k--) {
         let prevElement = array [k];
         prevSum += prevElement;      
      }
      if (nextSum === prevSum) {
         console.log(index);
         flag = true
      } else if (index === array.length - 1 && flag === false){
         console.log(`no`);
      }
      nextSum = 0;
      prevSum = 0;     
   }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);