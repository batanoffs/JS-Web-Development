const logoutBtn = document.getElementById("logout");
logoutBtn.style.display = "none";

document.querySelector("form").addEventListener("submit", onLogin);

async function onLogin(event) {
    event.preventDefault();
    const formDate = new FormData(event.target);
    const email = formDate.get("email");
    const password = formDate.get("password");

    const data = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    };
    try {
        const response = await fetch("http://localhost:3030/users/login", data);
        if (response.status !== 200) {
            const error = await response.json();
            throw new Error(error.message);
        }
        const userData = await response.json();

        sessionStorage.setItem("email", userData.email);
        sessionStorage.setItem("userId", userData._id);
        sessionStorage.setItem("authToken", userData.accessToken);

        
    } catch (error) {
        throw new Error("Login ->" + error);
    }
    window.location.href = "./index.html";
}
