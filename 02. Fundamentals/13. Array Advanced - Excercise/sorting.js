function sorting(input) {
   let sortedArray = input.sort((a,b) => b - a);
   let result = [];
   let sortedLength = sortedArray.length;
   for (let i = 0; i < sortedLength/2; i++) {
      let currentNumber = sortedArray.shift();
      let lastNumber = sortedArray.pop();
      result.push(currentNumber);
      result.push(lastNumber);
      
   }
   console.log(result.join(` `));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
// sorting();