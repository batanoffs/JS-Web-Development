function addItem() {
    const [textInput, inputValue] = document.querySelectorAll(
        "#newItemText, #newItemValue"
    );
    const button = document.querySelector(`input[value]`);
    const selectMenu = document.querySelector("#menu");

    let option = document.createElement(`option`);

    option.textContent = textInput.value;
    option.value = inputValue.value;
    selectMenu.appendChild(option);
    textInput.value = ``;
    inputValue.value = ``;
}
