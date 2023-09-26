function create(words) {

   let mainDiv = document.querySelector(`#content`);
   
   for (const word of words) {
      let currentDiv = document.createElement(`div`);
      let currentParagraph = document.createElement(`p`);
      currentParagraph.textContent = word;
      currentParagraph.style.display = `none`;
      currentDiv.addEventListener(`click`, () => {currentParagraph.style.display = `inline`;})

      currentDiv.appendChild(currentParagraph);
      mainDiv.appendChild(currentDiv);
   }
}