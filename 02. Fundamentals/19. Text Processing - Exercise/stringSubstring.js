function stringSubstring(word, text) {
   let textArray = text.split(` `);
   let isFound = true;

   for (const element of textArray) {
      if (word.toLowerCase() === element.toLowerCase()) {
         console.log(word);
         isFound = false;
         break;
      }
   }
   if (isFound) {
      console.log(`${word} not found!`);
   }
}

stringSubstring("javascript", "JavaScript is the best programming language");
stringSubstring("python", "JavaScript is the best programming language");
