function charactersInRange(char1, char2) {

   let startChar = Math.min(char1.charCodeAt(), char2.charCodeAt());
   let endChar = Math.max(char1.charCodeAt(), char2.charCodeAt());

   let charArr = [];

   for (let currentChar = startChar + 1; currentChar < endChar; currentChar ++) {
      charArr.push(String.fromCharCode(currentChar));
   }
   
   return charArr.join(` `);
}

console.log(charactersInRange("a", "d"));
console.log(charactersInRange("#", ":"));
console.log(charactersInRange("C", "#"));





