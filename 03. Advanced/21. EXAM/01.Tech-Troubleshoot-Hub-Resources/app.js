window.addEventListener("load", solution);

function solution() {
    //selectors

    const form = document.querySelector("form");
    const previewUL = document.querySelector(".preview-list");
    const addBtn = form[5];
    let counter = 0;

    addBtn.addEventListener(`click`, add);

    function add(ev) {
        ev.preventDefault();

        let employee = form[0].value;
        let category = form[1].value;
        let urgency = form[2].value;
        let assignedTeam = form[3].value;
        let description = form[4].value;

        if (
            !employee ||
            !category ||
            !urgency ||
            !assignedTeam ||
            !description
        ) {
            return;
        }
        let li = document.createElement("li");
        let editBtn = document.createElement("button");
        let continueBtn = document.createElement("button");
        let myArticle = createArticle(
            employee,
            category,
            urgency,
            assignedTeam,
            description
        );

        li.classList = "preview-list";
        editBtn.classList = "edit-btn";
        editBtn.textContent = "Edit";
        continueBtn.textContent = "Continue";
        continueBtn.classList = "continue-btn";
        li.appendChild(myArticle);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        previewUL.appendChild(li);

        form[0].value = ``;
        form[1].value = ``;
        form[2].value = ``;
        form[3].value = ``;
        form[4].value = ``;
        counter++;
        addBtn.textContent = counter;
    }
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
}
