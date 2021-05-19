async function createNewPostRedirect(event) {
 
      document.location.replace("/add-post");
  }
  
  document
    .querySelector('createNewPostBtn')
    .addEventListener("click", createNewPostRedirect);