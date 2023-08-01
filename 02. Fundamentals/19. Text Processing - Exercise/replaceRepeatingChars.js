function replaceRepeatingChars(text) {
   let result = text[0];
   for (let i = 1; i < text.length; i++) {
      let currentChar = text[i];
      let prevChar = text[i + 1];
      if (currentChar !== prevChar) {
         if (result !== currentChar) {
            result += currentChar;
         }
      }
   }
   console.log(result);
}

replaceRepeatingChars("aaaaabbbbbcdddeeeedssaa");
replaceRepeatingChars("qqqwerqwecccwd");
