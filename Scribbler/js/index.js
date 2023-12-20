document
  .getElementById("button-allpost")
  .addEventListener("click", function () {
    const title = document.getElementById("recipient-name").value;
    const content = document.getElementById("message-text").value;

    // Save inputs to local storage
    const postData = JSON.parse(localStorage.getItem("postData")) || [];
    postData.push({ title, content });
    localStorage.setItem("postData", JSON.stringify(postData));

    // Dismiss the modal
    let modalElement = document.getElementsByClassName(".modal-dialog");
    let bootstrapModal = new bootstrap.Modal(modalElement);
    bootstrapModal.hide();
    window.location.href = "postlistdemo.html";
  });
