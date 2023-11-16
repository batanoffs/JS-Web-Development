async function lockedProfile() {
  
  const main = document.querySelector("#main");
  const URL = "http://localhost:3030/jsonstore/advanced/profiles";


  
  try {
    const response = await fetch(URL, {
      method: "GET"
    });
    const data = await response.json();
  
    for (const obj of Object.values(data)) {
      let newProfile = createNewProfile(obj.username, obj.email, obj.age);      
      const user1UsernameDiv = newProfile.querySelector(".user1Username");
      user1UsernameDiv.style.display = "none";
      
      newProfile.querySelector("button").addEventListener("click", onShow);
      newProfile.querySelector('input[value="lock"]').addEventListener("click", lockProfile);
      newProfile.querySelector('input[value="unlock"]').addEventListener("click", unlockProfile);

      function onShow(event) {
        const info = event.target.parentNode.querySelector(".user1Username");
        if (info.style.display === "block") {
          info.style.display = "none";
          this.textContent = "Show more";
        } else {
          info.style.display = "block";
          this.textContent = "Hide it";
        }
      }

      function lockProfile(event) {    
        const showMoreButton = event.target.parentNode.querySelector("button");
        showMoreButton.disabled = true;
      }

      function unlockProfile(event) {
        const showMoreButton = event.target.parentNode.querySelector("button");
        showMoreButton.disabled = false;
      }
 
      main.appendChild(newProfile);
    }
  } catch (error) {
    console.error(error);
  }

  function createNewProfile(username, email, age) {
    const newProfile = document.createElement("div");
    newProfile.setAttribute("class", "profile");

    newProfile.innerHTML = `
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="user1Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user1Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value="${username}" disabled readonly />
        <div class="user1Username">
            <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value="${email}" disabled readonly />
            <label>Age:</label>
            <input type="email" name="user1Age" value="${age}" disabled readonly />
        </div>
        <button>Show more</button>
        `;
    return newProfile;
  }
}