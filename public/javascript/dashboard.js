async function createNewPostRedirect(event) {
  event.preventDefault();
  document.location.replace("/addPost/");
}

document
  .querySelector("#createNewPostBtn")
  .addEventListener("click", createNewPostRedirect);
