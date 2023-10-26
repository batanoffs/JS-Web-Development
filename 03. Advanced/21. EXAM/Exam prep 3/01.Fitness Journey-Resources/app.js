window.addEventListener("load", solve);

function solve() {
    //selectors
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const contactNumberField = document.getElementById("contact-number");
    const typeField = document.getElementById("class-type");
    const timeField = document.getElementById("class-time");
    const nextBtn = document.getElementById("next-btn");
    const previewUl = document.querySelector(".class-info");
    const confirmUl = document.querySelector(".confirm-class");
    const main = document.getElementById("main");

    nextBtn.addEventListener(`click`, onSubmit);

    function onSubmit(e) {
        e.preventDefault();
        if (
            !nameField.value ||
            !emailField.value ||
            !contactNumberField.value ||
            !typeField.value ||
            !timeField.value
        ) {
            return;
        }
        let list = document.createElement("li");
        list.setAttribute(`class`, `confirm-class`);
        let article = document.createElement("article");
        article.setAttribute("class", "personal-info");
        article.innerHTML = `
        <p>${nameField.value}</p>
        <p>${emailField.value}</p>
        <p>${contactNumberField.value}</p>
        <p>${typeField.value}</p>
        <p>${timeField.value}</p>
        `;
        let editBtn = document.createElement("button");
        editBtn.setAttribute("class", "edit-btn");
        editBtn.textContent = "Edit";
        let continueBtn = document.createElement("button");
        continueBtn.setAttribute("class", "continue-btn");
        continueBtn.textContent = "Continue";

        list.appendChild(article);
        list.appendChild(editBtn);
        list.appendChild(continueBtn);
        previewUl.appendChild(list);

        nameField.value = "";
        emailField.value = "";
        contactNumberField.value = "";
        typeField.value = "";
        timeField.value = "";
        nextBtn.disabled = true;

        editBtn.addEventListener(`click`, onEdit);

        function onEdit() {
            let arr = Array.from(article.children);
            let textContentArray = [];
            for (const el of arr) {
                textContentArray.push(el.textContent);
            }

            nameField.value = textContentArray[0];
            emailField.value = textContentArray[1];
            contactNumberField.value = textContentArray[2];
            typeField.value = textContentArray[3];
            timeField.value = textContentArray[4];
            nextBtn.disabled = false;
            list.remove();
        }
        continueBtn.addEventListener(`click`, onContinue);

        function onContinue() {
            let cancelBtn = document.querySelector(".edit-btn");
            cancelBtn.textContent = "Cancel";
            cancelBtn.setAttribute("class", "cancel-btn");
            cancelBtn.removeEventListener(`click`, onEdit);

            let confirmBtn = document.querySelector(".continue-btn");
            confirmBtn.textContent = "Confirm";
            confirmBtn.setAttribute("class", "confirm-btn");
            confirmBtn.removeEventListener(`click`, onContinue);

            confirmUl.appendChild(list);
            nextBtn.disabled = true;

            cancelBtn.addEventListener("click", onCancel);
            confirmBtn.addEventListener("click", onConfirm);

            function onCancel() {
                list.remove();
                nextBtn.disabled = false;
            }

            function onConfirm() {
                main.remove();
                let thankYou = document.createElement("h1");
                thankYou.setAttribute("id", "thank-you");
                thankYou.textContent =
                    "Thank you for scheduling your appointment, we look forward to seeing you!";
                let doneBtn = document.createElement("button");
                doneBtn.setAttribute("id", "done-btn");
                doneBtn.textContent = "Done";
                body.appendChild(thankYou);
                body.appendChild(doneBtn);

                doneBtn.addEventListener("click", reload);

                function reload() {
                    window.location.reload();
                }
            }
        }
    }
}
