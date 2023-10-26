window.addEventListener("load", solution);

function solution() {
    const form = document.querySelector("form");
    const previewUL = document.querySelector(".preview-list");
    const pendingUL = document.querySelector(".pending-list");
    const resolvedList = document.querySelector(".resolved-list");
    const addBtn = form[5];
    let employee = form[0];
    let category = form[1];
    let urgency = form[2];
    let assignedTeam = form[3];
    let description = form[4];

    addBtn.addEventListener(`click`, add);

    function add(ev) {
        ev.preventDefault();

        if (
            !employee.value ||
            !category.value ||
            !urgency.value ||
            !assignedTeam.value ||
            !description.value
        ) {
            return;
        }

        let listArticle = createArticle(
            employee.value,
            category.value,
            urgency.value,
            assignedTeam.value,
            description.value
        );

        function createArticle(e, c, u, team, d) {
            let article = document.createElement("article");
            article.innerHTML = `
                <p>Form: ${e}</p>
                <p>Category: ${c}</p>
                <p>Urgency: ${u}</p>
                <p>Assigned to: ${team}</p>
                <p>Description: ${d}</p>
                `;
            return article;
        }

        let liContent = document.createElement("li");
        liContent.setAttribute("class", "problem-content");

        let editBtn = document.createElement(`button`);
        editBtn.setAttribute("class", "edit-btn");
        editBtn.textContent = "Edit";

        let continueBtn = document.createElement(`button`);
        continueBtn.setAttribute("class", "continue-btn");
        continueBtn.textContent = "Continue";

        liContent.appendChild(listArticle);
        liContent.appendChild(editBtn);
        liContent.appendChild(continueBtn);
        previewUL.appendChild(liContent);

        form[0].value = ``;
        form[1].value = ``;
        form[2].value = ``;
        form[3].value = ``;
        form[4].value = ``;
        addBtn.disabled = true;
        
        editBtn.addEventListener(`click`, onEdit);
        continueBtn.addEventListener(`click`, pending);

        function onEdit() {
            let articleArray = Array.from(liContent.children[0].children);
            let articleValues = [];
            for (const el of articleArray) {
                articleValues.push(el.textContent);
            }
            let employeePreview = articleValues[0].split("Form: ")[1];
            let categoryPreview = articleValues[1].split("Category: ")[1];
            let urgencyPreview = articleValues[2].split("Urgency: ")[1];
            let assignedPreview = articleValues[3].split("Assigned to: ")[1];
            let descriptionPreview = articleValues[4].split("Description: ")[1];

            employee.value = employeePreview;
            category.value = categoryPreview;
            urgency.value = urgencyPreview;
            assignedTeam.value = assignedPreview;
            description.value = descriptionPreview;

            liContent.remove();
            addBtn.disabled = false;
        }
        function pending() {
            pendingUL.appendChild(liContent);
            editBtn.remove();
            continueBtn.textContent = `Resolved`;
            continueBtn.classList = `resolve-btn`;
            addBtn.disabled = false;
            continueBtn.removeEventListener(`click`, pending);
            continueBtn.addEventListener(`click`, resolve);
        }
        function resolve() {
            resolvedList.appendChild(liContent);
            continueBtn.textContent = `Clear`;
            continueBtn.classList = `clear-btn`;
            continueBtn.removeEventListener(`click`, resolve);
            continueBtn.addEventListener(`click`, clear);
        }
        function clear() {
            liContent.remove();
        }
    }
}
