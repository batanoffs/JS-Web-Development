window.addEventListener("load", solve);

function solve() {
    //selectors
    const modelInput = document.getElementById("car-model");
    const yearInput = document.getElementById("car-year");
    const partNameInput = document.getElementById("part-name");
    const partNumberInput = document.getElementById("part-number");
    const conditionInput = document.getElementById("condition");
    const form = document.querySelector("form");
    const infoList = document.querySelector(".info-list");
    const confirmList = document.querySelector(".confirm-list");
    const nextBtn = document.getElementById("next-btn");
    const completeImg = document.getElementById("complete-img");
    const completeText = document.getElementById("complete-text");

    form.addEventListener("submit", onFormSubmit);

    function onFormSubmit(e) {
        e.preventDefault();
        const model = modelInput.value;
        const year = Number(yearInput.value);
        const partName = partNameInput.value;
        const partNumber = Number(partNumberInput.value);
        const condition = conditionInput.value;
        
        if (!model || !year || !partName || !partNumber || !condition) return;
        if (year < 1980 || year > 2022) return;

        const li = create("li", infoList, { class: "part-content" });
        const article = create("article", li);

        create("p", article, {}, `Car Model: ${model}`);
        create("p", article, {}, `Car Year: ${year}`);
        create("p", article, {}, `Part Name: ${partName}`);
        create("p", article, {}, `Part Number: ${partNumber}`);
        create("p", article, {}, `Condition: ${condition}`);

        const editBtn = create("button", li, { class: "edit-btn" }, "Edit");
        const continueBtn = create("button", li, { class: "continue-btn" }, "Continue");

        editBtn.addEventListener("click", onEdit);
        continueBtn.addEventListener("click", onContinue);

        form.reset();
        nextBtn.disabled = true;
        completeImg.style.visibility = "hidden";
        completeText.textContent = "";

        function onEdit(e) {
            e.preventDefault();
            modelInput.value = model;
            yearInput.value = year;
            partNameInput.value = partName;
            partNumberInput.value = partNumber;
            conditionInput.value = condition;            
            li.remove();
            nextBtn.disabled = false;
        }

        function onContinue(e) {
            e.preventDefault();
            li.remove();
            editBtn.remove();
            continueBtn.remove();

            const confirmBtn = create("button", li, { class: "confirm-btn" }, "Confirm");
            const cancelBtn = create("button", li, { class: "cancel-btn" }, "Cancel");
            confirmBtn.addEventListener("click", onConfirm);
            cancelBtn.addEventListener("click", onCancel);

            confirmList.appendChild(li);

            function onConfirm(e) {
                e.preventDefault();
                li.remove();
                nextBtn.disabled = false;
                completeImg.style.visibility = "visible";
                completeText.textContent = "Part is Ordered!";

            }

            function onCancel(e) {
                e.preventDefault();
                li.remove();
                nextBtn.disabled = false;
            }
        }

        // Helper function to create an HTML element.
        function create(
            elementType,
            parentElement,
            attributes = {},
            content = ""
        ) {
            const element = document.createElement(elementType);

            for (const [key, value] of Object.entries(attributes)) {
                element.setAttribute(key, value);
            }

            if (attributes.hasOwnProperty("textContent")) {
                element.textContent = attributes.textContent;
            } else if (attributes.hasOwnProperty("value")) {
                element.value = attributes.value;
            } else {
                element.textContent = content;
            }

            if (parentElement) {
                parentElement.appendChild(element);
            }

            return element;
        }
    }
}

