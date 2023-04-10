function maxNumber(array) {
   let allIntegers = [];
   let flag = true;
   for (let index = 0; index < array.length; index++) {
      let element = array[index];
      flag = true;
      for (let i = index + 1; i < array.length; i++) {
         let nextElement = array[i];
         if (element <= nextElement) {
            flag = false;
            break;
         }         
      }
      if (flag === true) {
         allIntegers.push(element);
      }      
   }
   console.log(allIntegers.join(" "));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);