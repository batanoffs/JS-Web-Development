function focused() {
   const divArray = Array.from(document.querySelector(`div`).children);

   for (let div of divArray) {
      let inputField = div.children[1];
      inputField.addEventListener(`focus`, () => {
         inputField.parentElement.className = `focused`;
         console.log(`focus`);
      });
      inputField.addEventListener(`blur`, () => {
         inputField.parentElement.className = ``;
         console.log(`blur`);
      });
   }
}