function solve() {
    //get elements
    const formRef = document.querySelector(`form`);
    const taskRef = document.getElementById(`task`);
    const taskDescRef = document.getElementById(`description`);
    const dateRef = document.getElementById(`date`);
    const sectionRef = document.querySelectorAll(`section`);
    const openRef = sectionRef[1].children[1];
    const inProgress = sectionRef[2].children[1];
    const complete = sectionRef[3].children[1];

    formRef.addEventListener(`submit`, onSubmit);

    function onSubmit(event) {
        event.preventDefault();
        const taskValue = taskRef.value;
        const taskDescription = taskDescRef.value;
        const date = dateRef.value;

        if (!taskDescription || !taskValue || !date) {
            return;
        }
        let myArticle = createArticle(taskValue, taskDescription, date);
        openRef.appendChild(myArticle);
        taskDescRef.value = ``;
        taskRef.value = ``;
        dateRef.value = ``;
    }

    function createArticle(name, description, date) {
        let article = document.createElement(`article`);
        article.innerHTML = `
        <h3>${name}</h3>
        <p>Description: ${description}</p>
        <p>Due Date: ${date}</p>
        <div class = "flex">
            <button class="green">Start</button>
            <button class="red">Delete</button>
        </div>
        `;

        let [addArticleBtn, deleteArticleBtn] =
            article.querySelectorAll(`button`);

        addArticleBtn.addEventListener(`click`, moveArticle);
        deleteArticleBtn.addEventListener(`click`, deleteArticle);
        return article;
    }

    function moveArticle(event) {
        const article = event.target.parentElement.parentElement;
        let [deleteBtn, finishBtn] = article.querySelectorAll(`button`);

        if (article.parentElement === openRef) {
            deleteBtn.classList = "red";
            deleteBtn.textContent = "Delete";
            finishBtn.classList = "orange";
            finishBtn.textContent = "Finish";
            inProgress.appendChild(article);
        } else if (article.parentElement === inProgress) {
            let parent = deleteBtn.parentElement.parentElement;
            let div = deleteBtn.parentElement;
            parent.removeChild(div);
            complete.appendChild(article);
        }
        deleteBtn.removeEventListener(`click`, moveArticle);
        deleteBtn.addEventListener(`click`, deleteArticle);

        finishBtn.removeEventListener(`click`, deleteArticle);
        finishBtn.addEventListener(`click`, finish);
    }
    function deleteArticle(event) {
        event.target.parentElement.parentElement.remove();
    }
    function finish(event) {
        const article = event.target.parentElement.parentElement;
        event.target.parentElement.remove();
        complete.appendChild(article);
    }
}
