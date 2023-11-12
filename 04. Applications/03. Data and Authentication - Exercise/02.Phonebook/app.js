function attachEvents() {
    //select
    const ul = document.getElementById("phonebook");
    const loadBtn = document.getElementById("btnLoad");
    const createBtn = document.getElementById("btnCreate");
    const person = document.getElementById("person");
    const phone = document.getElementById("phone");
    const url = "http://localhost:3030/jsonstore/phonebook/";

    loadBtn.addEventListener("click", load);
    createBtn.addEventListener("click", create);

    async function load() {
        const response = await fetch(url);
        if (!response.ok) {
            console.log(`Error: ${response.status}`);
            return;
        }
        const data = await response.json();
        for (let object of Object.entries(data)) {
            const li = document.createElement("li");
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", async () => {
                await fetch(url + object[1]._id,
                    {
                        method: "delete",
                    });
                    load();
            });

            li.textContent = `${object[1].person}: ${object[1].phone}Delete`;
            ul.appendChild(li);
            li.appendChild(deleteBtn);
        }
    }
    async function create() {
        try {
            const response = await fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    person: person.value,
                    phone: phone.value,
                }),
            });
            person.value = "";
            phone.value = "";
            load();
        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();
