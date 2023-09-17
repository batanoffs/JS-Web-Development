function toggle() {
   //constants
   const MORE = `More`;
   const LESS = `Less`;

   //capture elements
   const buttonSpan = document.querySelector(`.button`);
   const divWrapperText = document.querySelector(`#extra`);

   // toggle functionality
   buttonSpan.textContent = buttonSpan.textContent === MORE ? LESS : MORE;

   if (style == ``) {
    divWrapperText.style.display = `none`;
   }

   if (style == `none`) {
      divWrapperText.style.display = `block`;      
   } else if ((style = `block`)) {
      divWrapperText.style.display = `none`;      
   }
}
