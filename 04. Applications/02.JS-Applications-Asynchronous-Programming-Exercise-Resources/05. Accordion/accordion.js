window.onload = lockedProfile();
async function lockedProfile() {
    const URL = "http://localhost:3030/jsonstore/advanced/articles/";
    const section = document.getElementById("main");
    const responseList = await fetch(URL + "list");
    const dataList = await responseList.json();

    dataList.forEach((element) => {
        const elTitle = element.title;
        const id = element._id;

        fetch(URL + "details/" + id)
            .then((res) => res.json())
            .then((dataContent) => {
                const articleContent = dataContent.content;
                const newArticle = createArticle(elTitle, id, articleContent);
                const button = newArticle.querySelector("button");
                button.addEventListener("click", showMore);

                section.appendChild(newArticle);
            })
            .then((err) => {
                if (err !== undefined) {
                    console.log(err);
                }
            });
        
    });
    function showMore(event) {
        const button = event.target;
        const extra = button.parentNode.parentNode.querySelector(".extra");
        if (extra.style.display === "block") {
            extra.style.display = "none";
            button.textContent = "More";
        } else {
            extra.style.display = "block";
            button.textContent = "Less";
        }
    }
    function createArticle(title, id, content) {
        const article = document.createElement("div");
        article.setAttribute("class", "accordion");
        article.innerHTML = `
      <div class="head">
        <span>${title}</span>
        <button class="button" id="${id}">
          More
        </button>
      </div>
      <div class="extra">
        <p>${content}</p>
      </div>`;
        return article;
    }
}
