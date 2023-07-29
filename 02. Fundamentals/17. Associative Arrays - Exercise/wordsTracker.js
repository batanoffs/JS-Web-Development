function wordsTracker(data) {
   let myMap = new Map();
   let wordsToCheck = data.shift().split(` `);

   for (let word of wordsToCheck) {
      myMap.set(word, 0);
   }

   for (let line of data) {
      for (let check of wordsToCheck) {
         
         if(line === check) {
            let currentQuantity = myMap.get(line);
            myMap.set(line,currentQuantity + 1);
         }
      }
   }

   let sorted = Array.from(myMap).sort((a,b) => b[1] - a[1]);

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