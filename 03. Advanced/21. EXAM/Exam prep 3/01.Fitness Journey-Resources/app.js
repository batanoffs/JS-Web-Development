window.addEventListener("load", solve);

function solve() {
    //selectors
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const contactNumberField = document.getElementById("contact-number");
    const typeField = document.getElementById("class-type");
    const timeField = document.getElementById("class-time");
    const nextBtn = document.getElementById("next-btn");
    const previewUl = document.getElementsByClassName("class-info");
    const confirmUl = document.getElementsByClassName("confirm-class");

    nextBtn.addEventListener(`click`, onSubmit);

    function onSubmit(e) {
        e.preventDefault();
        if (
            !nameField.value ||
            !emailField.valie ||
            !contactNumberField.value ||
            !timeField.value ||
            !typeField.value
        ) {
            return;
        }
        let list = document.createElement("li");
        list.setAttribute(`class`, `confirm-class`);
    }
}
