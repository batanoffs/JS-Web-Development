function solve() {
   //capture elements
   const textArea = document.querySelector(`#input`);
   const textAreaValue = textArea.value;
   const resultDiv = document.getElementById(`output`);

   // logic
   const sentanceCollection = textAreaValue
      .split(`.`)
      .filter((s) => s !== ``)
      .map((s) => s + `.`);

   const paragrapthRoof = Math.ceil(sentanceCollection.length / 3);

   for (let i = 0; i < paragrapthRoof; i++) {
      const jointSentances = sentanceCollection.splice(0, 3).join(``);
      resultDiv.innerHTML += `<p>${jointSentances}</p>`;
   }
}
