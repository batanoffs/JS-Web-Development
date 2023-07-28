function wordsTracker(data) {
   let obj = {};
   let wordsToCheck = data.shift().split(` `);

   let counter1 = 0;
   let counter2 = 0;

   for (let word of data) {
      if (target1 === word) {
         counter1++;
      }
      if (target2 === word) {
         counter2++;
      }
   }
   obj[target1] = counter1;
   obj[target2] = counter2;

   let sorted = Object.entries(obj).sort((a,b) => b[1] - a[1]);

   for (let [value, key] of sorted) {
      console.log(`${value} - ${key}`);
   }
}


wordsTracker([
   'this sentence',
   'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
wordsTracker([
   'is the',
   'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);