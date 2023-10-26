function getArticleGenerator(articles) {
    // selectors

    const mainDiv = document.querySelector(`#content`);

    let articlesArray = articles.slice();

    return function showNext() {
        if (articlesArray[0] !== undefined) {
            const articleElement = document.createElement("article");
            articleElement.textContent = articlesArray.shift();
            mainDiv.appendChild(articleElement);
        }
    };
}
