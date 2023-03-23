function specialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let newNumber = i;
    let sumOfDigits = 0;

  switch (i) {
    case 5: case 7: case 11:
      console.log(`${i} -> True`);
      break;
    default:
      console.log(`${i} -> False`);
      break;
  }

    while (newNumber > 0) {
      sumOfDigits += newNumber % 10;
      newNumber = Math.floor(i / 10);
    }

    
  }
}
specialNumbers(15);


// function printSpecialNumbers(n) {
//   for (let i = 1; i <= n; i++) {
//     let sumOfDigits = 0;
//     let number = i;
//     while (number > 0) {
//       sumOfDigits += number % 10;
//       number = Math.floor(number / 10);
//     }
//     let isSpecial = (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11);
//     console.log(i + " -> " + isSpecial);
//   }
// }

// // Example usage
// printSpecialNumbers(15);


