function loadRepos() {
  const input = document.querySelector("#username");
  const ul = document.querySelector("#repos");
  const username = input.value;

  if (username === undefined) {
    return;
  }

  const URL = `https://api.github.com/users/${username}/repos`;

  fetch(URL, {
    method: "GET",
  })
    .then((res) => {
      if (res.status === 200) return res.json();
    })
    .then((data) => {
      let ulArr = Array.from(ul.children);
      for (let el of ulArr) {
        el.remove();
      }
      data.forEach((element) => {
        let repoName = element.full_name;
        let url = element.html_url;
        let li = document.createElement("li");
        let currentURL = document.createElement("a");

        currentURL.textContent = repoName;
        currentURL.setAttribute("href", url);

        li.appendChild(currentURL);

        ul.appendChild(li);
      });
    })
    .catch((err) => console.log(err));
}
