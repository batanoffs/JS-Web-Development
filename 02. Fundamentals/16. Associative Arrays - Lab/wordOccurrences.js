function wordOccurrences (data) {
   let myMap = new Map();

   for (const word of data) {      
      if (myMap.has(word)) {
         let newCount = myMap.get(word) + 1;
         myMap.set(word, newCount);         
      } else {
         myMap.set(word, 1);
      }
   }

   let sorted = Array.from(myMap).sort((a,b) => b[1] - a[1]);

   for (const [key,value] of sorted) {
      console.log(`${key} -> ${value} times`);
   }
}

wordOccurrences(
   ["Here", "is", "the", "first", "sentence",
   "Here", "is", "another", "sentence", "And",
   "finally", "the", "third", "sentence"]);

// wordOccurrences(
//    ["dog", "bye", "city", "dog",
//     "dad", "boys", "ginger"]);