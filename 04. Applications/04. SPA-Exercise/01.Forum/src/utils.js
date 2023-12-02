export function formatAMPM(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const strTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${ampm}`;
  return strTime;
}

export function createElement(elementType, props, ...children) {
  const element = document.createElement(elementType);

  for (const [attr, value] of Object.entries(props || {})) {
    if (attr.startsWith("on")) {
      element.addEventListener(attr.toLowerCase(), value);
    } else {
      element.setAttribute(attr, value);
    }
  }

  children.flatMap(child => Array.isArray(child) ? child : [child])
    .forEach(child => {
      if (typeof child === "string" || typeof child === "number") {
        const textNode = document.createTextNode(child);
        element.appendChild(textNode);
      } else {
        element.appendChild(child);
      }
    });

  return element;
}



export function createPostCard(post) {
  // dont create new element result but use the existing one with class topic-container

  const result = document.createElement("div");
  result.classList.add("topic-container");
  result.dataset.id = post._id;

  const topicNameWrapper = document.createElement("div");
  topicNameWrapper.classList.add("topic-name-wrapper");
  result.appendChild(topicNameWrapper);

  const topicName = document.createElement("div");
  topicName.classList.add("topic-name");
  topicNameWrapper.appendChild(topicName);

  const link = document.createElement("a");
  link.classList.add("normal");
  link.href = "#";
  topicName.appendChild(link);

  const title = document.createElement("h2");
  title.classList.add("topic-name");
  title.dataset.id = post._id;
  title.textContent = post.title;
  link.appendChild(title);

  const columns = document.createElement("div");
  columns.classList.add("columns");
  topicName.appendChild(columns);

  const infoWrapper = document.createElement("div");
  columns.appendChild(infoWrapper);

  const date = document.createElement("p");
  date.textContent = "Date: ";
  const time = document.createElement("time");
  time.textContent = post.date;
  date.appendChild(time);
  infoWrapper.appendChild(date);

  const nickname = document.createElement("div");
  nickname.classList.add("nick-name");
  infoWrapper.appendChild(nickname);

  const username = document.createElement("p");
  username.textContent = "Username: ";
  const span = document.createElement("span");
  span.textContent = post.username;
  username.appendChild(span);
  nickname.appendChild(username);

  return result;
}


export function createOneTopicView(topic) {
  const topicView = createElement("div", { class: "topic-container", "data-topicId": topic.id },
    createElement("div", { class: "topic-name-wrapper" },
      createElement("a", { href: "#", class: "normal" },
        createElement("h2", {}, topic.title)
      )
    ),
    createElement("div", { class: "columns" },
      createElement("div", {},
        createElement("p", {}, "Date: "),
        createElement("time", {}, topic.time)
      ),
      createElement("div", { class: "nick-name" },
        createElement("p", {}, "Username: "),
        createElement("span", {}, topic.username)
      )
    )
  );
  return topicView;
}
export function createOneComment(comment) {
  const result = createElement(
    "div",
    { id: "user-comment" },
    createElement(
      "div",
      { class: "topic-name-wrapper" },
      createElement(
        "div",
        { class: "topic-name" },
        createElement(
          "p",
          {},
          createElement("strong", {}, comment.username),
          " commented on ",
          createElement("time", {}, comment.date)
        ),
        createElement("div", { class: "post-content" }, createElement("p", {}, comment.commentText))
      )
    )
  );

  return result;
}

export function createTextArea() {
  const result = createElement("div", { class: "container" },
    createElement("div", { class: "topic-name-wrapper" },
      createElement("div", {},
        createElement("form",{},
          createElement("div",{ class: "new-topic-content" },
            createElement("textarea", {
              type: "text",
              name: "commentText",
              id: "commentText",
              rows: "8",
              cols: "60",
            })
          ),
          createElement("div",{ class: "new-topic-title" },
            createElement("label", { for: "username" }, "Username "),
            createElement("span", { class: "red" }, "*"),
            createElement("input", { type: "text", name: "username", id: "username" })
          ),
          createElement("div",{ class: "new-topic-buttons" },
            createElement("button", { class: "public" }, "Post")
          )
        )
      )
    )
  );

  return result;
}
