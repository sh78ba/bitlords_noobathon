document.addEventListener("DOMContentLoaded", function () {
  const postForm = document.getElementById("postForm");
  const usernameInput = document.getElementById("username"); // Updated to get username input
  const postContent = document.getElementById("postContent");
  const postsContainer = document.getElementById("posts");
  const screenshotInput = document.getElementById("screenshotInput");

  postForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = usernameInput.value.trim(); // Get the username from the input field
    const content = postContent.value.trim();
    const screenshots = Array.from(screenshotInput.files);
    if (content !== "" && username !== "") {
      // Check if both username and content are not empty
      createPost(username, content, screenshots);
      postContent.value = "";
      screenshotInput.value = null;
    }
  });

  function createPost(username, content, screenshots) {
    const currentDate = new Date();
    const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

    const postDiv = document.createElement("div");
    postDiv.classList.add("user-post"); // Changed to add "user-post" class instead of "post"

    const userHeadingDiv = document.createElement("div"); // Added to include user's username
    userHeadingDiv.classList.add("user-heading");
    const userNameSpan = document.createElement("span");
    userNameSpan.classList.add("user-name");
    userNameSpan.textContent = username;
    userHeadingDiv.appendChild(userNameSpan);
    postDiv.appendChild(userHeadingDiv);

    const postContentDiv = document.createElement("div");
    postContentDiv.textContent = content;
    postDiv.appendChild(postContentDiv);

    const screenshotDiv = document.createElement("div");
    screenshotDiv.classList.add("screen-shot");
    screenshots.forEach((file) => {
      const screenshotImg = document.createElement("img");
      screenshotImg.src = URL.createObjectURL(file);
      screenshotImg.alt = "screen-shot";
      screenshotDiv.appendChild(screenshotImg);
    });
    postDiv.appendChild(screenshotDiv);

    const postDate = document.createElement("span");
    postDate.textContent = formattedDate;
    postDiv.appendChild(postDate);

    const hr = document.createElement("hr");
    postDiv.appendChild(hr);

    postsContainer.prepend(postDiv);
  }
});

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".menu").classList.toggle("open");
  });
