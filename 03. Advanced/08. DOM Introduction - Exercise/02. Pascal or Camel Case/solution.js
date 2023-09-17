function solve() {
   // constants
   const CAMEL_CASE = `Camel Case`;
   const PASCAL_CASE = `Pascal Case`;

   // capture elemets
   const inputValueLowerCase = document
      .getElementById(`text`)
      .value.toLowerCase();
   const currentCaseValue = document.getElementById(`naming-convention`).value;
   const result = document.getElementById(`result`);

   //validate case
   if (currentCaseValue !== CAMEL_CASE && currentCaseValue !== PASCAL_CASE) {
      result.textContent = `Error!`;
      return;
   }

   //solve
   const arrOfInput = inputValueLowerCase.split(` `);
   let output = ``;
   let startingPoint = 0;

   if (currentCaseValue === CAMEL_CASE) {
      output += arrOfInput[0];
      startingPoint = 1;
   }
   for (let i = startingPoint; i < arrOfInput.length; i++) {
      const currentWord = arrOfInput[i];
      output += currentWord[0].toUpperCase() + currentWord.slice(1, currentWord.length);
      
      result.textContent = output;
   }
}
