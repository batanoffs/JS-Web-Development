function attachEvents() {
    //URLs
    const postURL = "http://localhost:3030/jsonstore/blog/posts";
    const commentURL = "http://localhost:3030/jsonstore/blog/comments/";

    // Selectors
    const loadBtn = document.getElementById("btnLoadPosts");
    const viewBtn = document.getElementById("btnViewPost");
    const postTitle = document.getElementById("post-title");
    const postBody = document.getElementById("post-body");
    const postComments = document.getElementById("post-comments");
    const select = document.getElementById("posts");

    // Events
    loadBtn.addEventListener("click", loadPosts);
    viewBtn.addEventListener("click", viewPost);

    // Fetching posts
    // The button with ID "btnLoadPosts" should make a GET request to "/posts".
    // The response from the server will be an Object of objects.
    // Each object will be in the following format:
    // body: {postBody},
    // id: {postId},
    // title: {postTitle}
    async function loadPosts() {
        try {
            const response = await fetch(postURL);
            const data = await response.json();

            // Create an <option> for each post using its object key as value
            // and current object title property as text inside the node with ID "posts".

            for (const obj of Object.entries(data)) {
                const option = document.createElement("option");
                option.value = obj[0];
                option.textContent = obj[1].title;
                select.appendChild(option);
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Fetching comments
    async function viewPost() {
        //select current option
        const option = select.options[select.selectedIndex];
        option.selected = true;
        const postId = option.value;
        try {
            const response = await fetch(postURL);
            const data = await response.json();
            for (const obj of Object.entries(data)) {
                if (obj[0] === postId) {
                    postTitle.textContent = obj[1].title;
                    postBody.textContent = obj[1].body;
                }
            }
        } catch (error) {
            console.error(error);
        }
        try {
            const responseComents = await fetch(commentURL);
            const dataComents = await responseComents.json();
            for (const obj of Object.values(dataComents)) {
                if (obj.postId === postId) {
                    const li = document.createElement("li");
                    li.textContent = obj.text;
                    postComments.appendChild(li);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();
