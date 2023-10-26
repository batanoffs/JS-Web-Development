window.addEventListener("load", solve);

function solve() {
    // Selectors
    const inputElements = document.querySelectorAll("form input");
    const descriptionField = document.querySelector(".inner-wrap textarea");
    const inProgressField = document.getElementById("in-progress");
    const progressBar = document.getElementById("progress-count");
    const genderInfo = document.getElementById("genderSelect");
    const submitBtn = inputElements[3];
    const finished = document.getElementById("finished");
    const clearBtn = document.getElementById("clear-btn");
    let progressCounter = Number(progressBar.textContent);
    
    submitBtn.addEventListener("click", onSubmit);
    clearBtn.addEventListener(`click`, clear);

    function onSubmit() {
        
        let firstName = inputElements[0].value;
        let lastName = inputElements[1].value;
        let age = inputElements[2].value;
        let description = descriptionField.value;
        if (!firstName || !lastName || !age || !description) {
            return;
        }

        let gender = genderInfo.value;

        let myArticle = createArticle(
            firstName,
            lastName,
            age,
            description,
            gender
        );

        inProgressField.appendChild(myArticle);
        //clear input fields
        inputElements[0].value = ``;
        inputElements[1].value = ``;
        inputElements[2].value = "";
        descriptionField.value = ``;

        //increment counter
        progressCounter++;
        progressBar.textContent = progressCounter;
    }

    function createArticle(firstName, lastName, age, description, gender) {
        // create elements
        let li = document.createElement(`li`);
        let article = document.createElement(`article`);
        let editBtn = document.createElement(`button`);
        let completeBtn = document.createElement(`button`);

        // define btn props
        editBtn.classList = "edit-btn";
        editBtn.textContent = "Edit";
        completeBtn.classList = "complete-btn";
        completeBtn.textContent = "Mark as complete";

        //define li element properties
        li.classList = "each-line";

        //define article elements
        article.innerHTML = `
            <h4>${firstName} ${lastName}</h4>
            <p>${gender}, ${age}</p>
            <p>Dish description: ${description}</p>
            `;
        //append elements
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(completeBtn);
        editBtn.addEventListener(`click`, edit);
        completeBtn.addEventListener(`click`, complete);
        return li;
    }

    function complete(event) {
        let li = event.target.parentElement;
        li.children[1].remove();
        li.children[1].remove();
        finished.append(li);
        //decrement counter
        progressCounter--;
        progressBar.textContent = progressCounter;
    }

    function edit(event) {
        let li = event.target.parentElement;
        let article = li.querySelector(`article`).children;
        let [firstNameBack, lastNameBack] = article[0].textContent.split(` `);
        // maybe age has to be a number
        let [gender, age] = article[1].textContent.split(`, `);
        let description = article[2].textContent.split(`Dish description: `)[1];

        inputElements[0].value = firstNameBack;
        inputElements[1].value = lastNameBack;
        inputElements[2].value = age;
        descriptionField.value = description;
        genderInfo.value = gender;

        li.remove();

        //decrement counter
        progressCounter--;
        progressBar.textContent = progressCounter;
    }
    function clear() {
        finished.innerHTML = "";
    }
}
