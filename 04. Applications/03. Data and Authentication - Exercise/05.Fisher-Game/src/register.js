const logoutBtn = document.getElementById("logout");
logoutBtn.style.display = "none";
const form = document.querySelector("form");
form.addEventListener("submit", onSumbmit);
const URL = "http://localhost:3030/users/register";

async function onSumbmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("rePass");
    if (!email || !password || !rePass || password !== rePass) {
        window.alert("All fields are required");
        // throw new Error("All fields are required");
        // notification("All fields are required");
    }
    const data = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    };
    try {
        const response = await fetch(URL, data);
        const userData = await response.json();
        sessionStorage.setItem("email", userData.email);
        sessionStorage.setItem("userId", userData._id);
        sessionStorage.setItem("authToken", userData.accessToken);
        window.location.href = "index.html";
    } catch (error) {
        throw new Error(error);
    }
}
