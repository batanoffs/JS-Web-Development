function addItem() {
   const ul = document.querySelector(`ul`);
   const inputField = document.getElementById(`newItemText`);
   let newLi = document.createElement(`li`);
   let deleteButton = document.createElement(`a`);
   deleteButton.href = `#`;
   deleteButton.textContent = `[Delete]`;

   newLi.textContent = inputField.value;
   newLi.appendChild(deleteButton);
   ul.appendChild(newLi);

   deleteButton.addEventListener(`click`, () => newLi.remove());
   inputField.value = ``;
}