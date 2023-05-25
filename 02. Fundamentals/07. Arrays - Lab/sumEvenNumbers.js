// function sumEvenNumbers (arr) {
//   let sum = 0;

//   for(let i = 0; i < arr.length; i++) {    
//     let currentNumber = parseInt(arr[i]);
//     if (currentNumber % 2 === 0) {
//       sum += currentNumber;
//     }    
//   }
//   console.log(sum);
// }
// sumEvenNumbers(['1','2','3','4','5','6']);

function sum (numAsText) {
  let sum = 0;
  
  for(let text of numAsText) {    
    let num = Number(text);
    sum += num % 2 === 0 ? num : 0;        
  }
  console.log(sum);
}
sum(['1','2','3','4','5','6']);