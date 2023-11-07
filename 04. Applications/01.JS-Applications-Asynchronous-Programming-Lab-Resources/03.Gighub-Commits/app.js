function loadCommits() {
  // Try it with Fetch API
  const gitName = document.getElementById("username");
  const repoName = document.getElementById("repo");
  const username = gitName.value;
  const repository = repoName.value;
  const URL = `https://api.github.com/repos/${username}/${repository}/commits`;
  const commits = document.getElementById("commits");

  fetch(URL)
    .then((res) => {
      if (res.status == 200) return res.json();
    })
    .then((data) => {
      data.forEach((entry) => {
        let li = document.createElement("li");
        li.textContent = `${entry.commit.author.name}: ${entry.commit.message}`;
        commits.appendChild(li);
      });
    })
    .then((err) => {
      if (err) {
        let li = document.createElement("li");
        li.textContent = `Error: ${err.error.status} (Not Found)`;
        commits.appendChild(li);
      }
    });
}
