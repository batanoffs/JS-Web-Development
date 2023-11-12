function attachEvents() {
    //select textarea id messages
    const textarea = document.getElementById("messages");
    const sendBtn = document.getElementById("submit");
    const refreshBtn = document.getElementById("refresh");
    const authorInput = document.querySelector(`input[name="author"]`);
    const contentInput = document.querySelector(`input[name="content"]`);
    const url = "http://localhost:3030/jsonstore/messenger";

    sendBtn.addEventListener("click", sendMessage);
    refreshBtn.addEventListener("click", refresh);

    async function sendMessage() {
        if (authorInput.value == "" || contentInput.value == "") {
            return;
        }

        const obj = {
            author: authorInput.value,
            content: contentInput.value,
        };

        authorInput.value = "";
        contentInput.value = "";

        try {
            const response = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj),
            });
        } catch (error) {
            console.log(error);
        }
    }

    async function refresh() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            textarea.value = "";
            let buffer = "";
            for (let obj of Object.entries(data)) {
                buffer += `${obj[1].author}: ${obj[1].content}\n`;
            }
            textarea.value = buffer.trim();
        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();
