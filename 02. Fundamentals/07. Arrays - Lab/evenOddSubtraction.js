function evenOddSubtraction(arr) {
  let sumOdd = 0;
  let sumEven = 0;
  let num = 0;
  for(let i = 0; i < arr.length; i++) { 
    num = arr[i];
    if (num % 2 === 0) {
      sumEven += num;
    } else {
      sumOdd += num;
    }
  }
  let diff = sumEven - sumOdd;  
  console.log(diff);
}
evenOddSubtraction([2,4,6,8,10]);