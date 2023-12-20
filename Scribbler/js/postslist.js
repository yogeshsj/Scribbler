function redirectToPost() {
  window.location.href = "/html/post.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const postData = JSON.parse(localStorage.getItem("postData")) || [];

  // Function to delete a post
  function deletePost(index) {
    postData.splice(index, 1);
    localStorage.setItem("postData", JSON.stringify(postData));
    location.reload(); // Reload the page after deletion
  }

  // Function to show options (Here it logs the post index)
  function showOptions(index) {
    console.log("Options for post index: ", index);
  }

  // Loop through saved data and create sub-divs with buttons for each entry
  postData.forEach((post, index) => {
    const newPostDiv = document.createElement("div");
    newPostDiv.classList.add("card");

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("card-content");

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("sub-div");
    // titleDiv.style.backgroundColor = "white";
    titleDiv.textContent = post.title;

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("sub-div");
    contentDiv.style.width = "95%";
    contentDiv.textContent = post.content;

    mainDiv.appendChild(titleDiv);
    mainDiv.appendChild(contentDiv);

    newPostDiv.appendChild(mainDiv);

    // Create delete button and options button for each post
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => deletePost(index));

    const optionsBtn = document.createElement("button");
    optionsBtn.innerHTML = "Options";
    optionsBtn.classList.add("options-btn");
    optionsBtn.addEventListener("click", () => showOptions(index));

    newPostDiv.appendChild(deleteBtn);
    newPostDiv.appendChild(optionsBtn);

    const container = document.querySelector(".card-container");
    container.appendChild(newPostDiv);
  });
});
