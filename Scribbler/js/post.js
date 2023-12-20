const editButton = document.getElementById("edit-button");
const postTitle = document.getElementById("post-title");
const postContent = document.getElementById("post-content");

editButton.addEventListener("click", function () {
  if (editButton.innerText === "Edit") {
    postTitle.contentEditable = "true";
    postContent.contentEditable = "true";
    editButton.innerText = "Save";
  } else {
    postTitle.contentEditable = "false";
    postContent.contentEditable = "false";
    editButton.innerText = "Edit";
  }
});

const likeButton = document.getElementById("like-button");
const likeInfo = document.getElementById("like-info");
let likeCount = 0;

likeButton.addEventListener("click", function () {
  likeCount++;
  if (likeCount === 1) {
    likeInfo.innerText = "1 person likes this!";
  } else {
    likeInfo.innerText = likeCount + " people like this!";
  }
  likeButton.innerText = "Liked!";
});

// Comment Button Functionality
const commentInput = document.getElementById("comment-input");
const commentButton = document.getElementById("comment-button");
const allComments = document.getElementById("all-comments");

commentButton.addEventListener("click", function () {
  const newComment = document.createElement("div");
  newComment.classList.add("comment");
  newComment.innerText = commentInput.value;
  allComments.prepend(newComment);
  commentInput.value = "";
});
