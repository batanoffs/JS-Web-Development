function NonDecreasingSubset(array) {
   let currentNumber = array[0];  
   console.log(currentNumber);
      for (let index = 1; index < array.length; index++) {
         let element = array[index];
         currentNumber < element ? element : currentNumber; 
         // healingNumber = health + value > 100 ? 100 - health : value;
      }
}


NonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
NonDecreasingSubset([ 1, 2, 3, 4]);
NonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);