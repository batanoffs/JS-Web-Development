function censoredWords(text, word) {
   let censorded = text.replace(word, repeat(word));
   while (censorded.includes(word)) {
      censorded = censorded.replace(word, repeat(word));
   }

   function repeat(text) {
      let newWord = "";
      for (let i = 0; i < text.length; i++) {
         newWord += "*";
      }
      return newWord;
   }
   console.log(censorded);
}

censoredWords("A small sentence with some words", "small");
censoredWords("Find the hidden word", "hidden");
