function addItem() {
    const ul = document.querySelector(`ul`);
    const inputField = document.getElementById(`newItemText`);
    let newLi = document.createElement(`li`);
    newLi.textContent = inputField.value;
    ul.appendChild(newLi);

    inputField.value = ``;
}