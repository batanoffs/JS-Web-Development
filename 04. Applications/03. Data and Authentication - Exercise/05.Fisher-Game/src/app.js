const URI = "http://localhost:3030/users/";
const catchesURI = "http://localhost:3030/data/catches/";
const endpoints = {
    logout: "logout",
};

const loginBtnRef = document.querySelector("#login");
const registerBtnRef = document.querySelector("#register");
const logoutBtnRef = document.querySelector("#logout");
const userNameRef = document.querySelector(".email > span");
const catchesRef = document.querySelector("#catches");
const addCatchesBtn = document.querySelector("#addForm button");
const guestDiv = document.querySelector("#guest");
const userDiv = document.querySelector("#user");

catchesRef.innerHTML = "";

logoutBtnRef.addEventListener("click", onLogout);
document
    .querySelector("button.load")
    .addEventListener("click", onLoadAllCatches);
document.querySelector("form").addEventListener("submit", onCreateCatches);

if (sessionStorage.getItem("userId")) {
    guestDiv.style.display = `none`;
    userNameRef.textContent = sessionStorage.getItem("email");
    addCatchesBtn.disabled = false;
} else {
    userNameRef.textContent = "guest";
    userDiv.style.display = "none";
    logoutBtnRef.style.display = "none";
}

async function onLogout() {
    const response = await fetch(URI + endpoints.logout, {
        method: "get",
        headers: { "X-Authorization": sessionStorage.getItem("authToken") },
    });

    sessionStorage.clear();
    window.location.href = "./index.html";
}

async function onLoadAllCatches(event) {
    const allCatches = await getAllCatches();
    allCatches.forEach((e) => {
        const catches = generateCatches(e);
        catchesRef.appendChild(catches);
    });
}
async function onCreateCatches(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const angler = formData.get("angler");
    const weight = formData.get("weight");
    const species = formData.get("species");
    const location = formData.get("location");
    const bait = formData.get("bait");
    const captureTime = formData.get("captureTime");

    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        throw new Error("All fields are required");
    }

    const data = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": sessionStorage.getItem("authToken"),
        },
        body: JSON.stringify({
            angler,
            weight,
            species,
            location,
            bait,
            captureTime,
        }),
    };
    try {
        const response = await fetch(catchesURI, data);
        if (response.status !== 200) {
            const error = await response.json();
            throw new Error(error.message);
        }
    } catch (error) {
        throw new Error(error);
    }
    event.target.reset();
    catchesRef.innerHTML = "";
    onLoadAllCatches(); 
}
function generateCatches(e) {
    const div = document.createElement("div");
    div.classList.add("catch");
    const isOwner = e._ownerId === sessionStorage.getItem("userId");
    div.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" value="${e.angler}" ${!isOwner ? "disabled" : ""}>
    <label>Weight</label>
    <input type="text" class="weight" value="${e.weight}" ${!isOwner ? "disabled" : ""}>
    <label>Species</label>
    <input type="text" class="species" value="${e.species}" ${!isOwner ? "disabled" : ""}>
    <label>Location</label>
    <input type="text" class="location" value="${e.location}" ${!isOwner ? "disabled" : ""}>
    <label>Bait</label>
    <input type="text" class="bait" value="${e.bait}" ${!isOwner ? "disabled" : ""}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${e.captureTime}" ${!isOwner ? "disabled" : ""}>
    <button class="update" data-id="${e._id}" disabled>Update</button>
    <button class="delete" data-id="${e._id}" disabled>Delete</button>
    </div>`;
    if (e._ownerId === sessionStorage.getItem("userId")) {
        const delBtn = div.querySelector("button.delete")
        delBtn.disabled = false;
        delBtn.addEventListener("click", onDelete);
        div.querySelector("button.update")
        const updateBtn = div.querySelector("button.update");
        updateBtn.disabled = false;
        updateBtn.addEventListener("click", onUpdate);

    }
    return div;
}

async function onDelete(e) {
    const catchesId = e.target.dataset.id;
    const response = await fetch(catchesURI + catchesId, {
        method: "DELETE",
        headers: { "X-Authorization": sessionStorage.getItem("authToken") },
    })
    catchesRef.innerHTML = "";
    onLoadAllCatches();
}

async function onUpdate(e) {
    const catchesId = e.target.dataset.id;
    const inputs = e.target.parentElement.querySelectorAll("input");
    const angler = inputs[0].value;
    const weight = Number(inputs[1].value);
    const species = inputs[2].value;
    const location = inputs[3].value;
    const bait = inputs[4].value;
    const captureTime = Number(inputs[5].value);
    const _ownerId = sessionStorage.getItem("userId");
    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        throw new Error("All fields are required");
    }
    const data = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime,
        _ownerId
    }
    const response = await fetch(catchesURI + catchesId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": sessionStorage.getItem("authToken"),
        },
        body: JSON.stringify(data)
    })
    catchesRef.innerHTML = "";
    onLoadAllCatches();
}

async function getAllCatches() {
    const response = await fetch(catchesURI);
    const data = await response.json();
    return data;
}
