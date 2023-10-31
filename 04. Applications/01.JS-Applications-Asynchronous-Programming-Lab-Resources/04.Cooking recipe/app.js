const recipesURL = "http://localhost:3030/jsonstore/cookbook/recipes";

function loadRecipese() {
    fetch(recipesURL, {
        method: "GET",
    })
        .then((res) => {
            if (!res.status === 200) {
                throw new Error("Wrong status");
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            const loader = document.getElementById("loader");
            loader.style.display = "none";

            Object.values(data).forEach((element) => {
                const article = document.createElement("article");
                const h2 = document.createElement("h2");
                h2.textContent = element.name;
                const div = document.createElement("div");
                const innerDiv = document.createElement("div");
                const img = document.createElement("img");

                img.setAttribute("src", element.img);
                innerDiv.appendChild(img);
                div.appendChild(innerDiv);
                article.appendChild(h2);
                article.appendChild(div);

                const main = document.querySelector("main");
                main.appendChild(article);

                article.addEventListener(`click`, () => {
                    const ingredientsURL =
                        "http://localhost:3030/jsonstore/cookbook/details/" + element._id;
                    fetch(ingredientsURL, {
                        method: "GET",
                    })
                        .then((res) => {
                            console.log(res.status);
                            if (res.status !== 200) {
                                throw new Error("Wrong status code");
                            }
                            return res.json();
                        })
                        .then((data) => {
                            const innerDivIngr = document.createElement(`div`);
                            const h3 = document.createElement("h3");
                            h3.textContent = "Ingredients:";

                            const ul = document.createElement("ul");
                            innerDivIngr.appendChild(h3);
                            innerDivIngr.appendChild(ul);
                            div.appendChild(innerDivIngr);

                            Object.values(data).forEach((ingredient) => {
                                const li = document.createElement("li");
                                li.textContent = ingredient;
                                ul.appendChild(li);
                            });
                        })
                        .catch((err) => console.log(err));
                });
            });
        })
        .catch((err) => console.log(err));
}

loadRecipese();
