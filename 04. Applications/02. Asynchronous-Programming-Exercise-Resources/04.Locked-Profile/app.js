async function lockedProfile() {
  // Selectors
  const main = document.querySelector("#main");
  const URL = "http://localhost:3030/jsonstore/advanced/profiles";

  //fetch the url with async await
  
  try {
    const response = await fetch(URL, {
      method: "GET"
    });
    const data = await response.json();
    debugger
    // the response is an object with objects inside, create a new profile for every object
    for (const obj of Object.values(data)) {
      // create new profile
      let newProfile = createNewProfile(obj.username, obj.email, obj.age);
      // hide user1Username div
      const user1UsernameDiv = newProfile.querySelector(".user1Username");
      user1UsernameDiv.style.display = "none";
      // add event listeners
      newProfile.querySelector("button").addEventListener("click", showMore);
      newProfile
        .querySelector('input[value="lock"]')
        .addEventListener("click", lockProfile);
      newProfile
        .querySelector('input[value="unlock"]')
        .addEventListener("click", unlockProfile);

      function showMore() {
        const info = newProfile.querySelector(".user1Username");
        if (info.style.display === "block") {
          info.style.display = "none";
          this.textContent = "Show more";
        } else {
          info.style.display = "block";
          this.textContent = "Hide it";
        }
      }

      function lockProfile(event) {
        // select button showmore from the event
        const showMoreButton = event.target.parentNode.querySelector("button");
        showMoreButton.disabled = true;
      }

      function unlockProfile(event) {
        const showMoreButton = event.target.parentNode.querySelector("button");
        showMoreButton.disabled = false;
      }
      // append new profile
      main.appendChild(newProfile);
    }
  } catch (error) {
    console.error(error);
  }
  // function create new Profile
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
            <input type="text" name="user1Age" value="${age}" disabled readonly />
        </div>
        <button>Show more</button>
        `;
    return newProfile;
  }
}