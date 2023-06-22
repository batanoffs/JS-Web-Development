function palindromeIntegers(array) {

   for (let index = 0; index < array.length; index++) {

      let numberAsString = array[index].toString();
      let reversedNumber = numberAsString.split('').reverse().join('');

      if(numberAsString === reversedNumber) {
         console.log(true);
      } else {
         console.log(false);
      }      
   }
}

palindromeIntegers([123, 323, 421, 121]);
console.log(`--------------`);
palindromeIntegers([32, 2, 232, 1010]);

// function palindromeIntegers(array) {
//   let reversedNum = [];

//   for (let i = 0; i < array.length; i++) {
//     let currentNum = array[i];
//     currentNum = currentNum + ``;

//     for (let index = currentNum.length - 1; index >= 0; index--) {
//       let element = currentNum[index];
//       reversedNum.push(element);
//     }

//     reversedNum = reversedNum.join("");

//     if (currentNum === reversedNum) {
//       console.log(`true`);
//     } else {
//       console.log(`false`);
//     }
//     reversedNum = [];
//   }
// }

