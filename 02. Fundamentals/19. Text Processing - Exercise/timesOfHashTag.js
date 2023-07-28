function timesOfHashTag (input) {

   let inputArray = input.split(" ");
   for (const wordArray of inputArray) {
      let check = wordArray.includes("#");
      if (check && wordArray.length > 1) {
         let word = wordArray.split(``);
         word.shift();
         
         let wordPrint = ``;
         for (const char of word) {
            if (!isNaN(char)) {
               wordPrint = ``;
               break;
            } else {
               wordPrint += char;
            }
         }
         if (wordPrint.length > 0) {
            console.log(wordPrint);
         }
      }
   }
}

// timesOfHashTag ('Nowadays everyone uses # to tag a #special word in #socialMedia');
timesOfHashTag ('The symbol # is known #variously in English-speaking #regions as the #number sign');
