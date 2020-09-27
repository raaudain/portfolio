const project = document.querySelectorAll(".project");

project.forEach(button => {
  button.addEventListener("click", element => {
    // Declares content id as a variable
    const content = button.lastElementChild; 
    // Declares icon in nav as variable
    const toggleClass = button.firstElementChild.children[1].lastElementChild; 
    const tagName = element.target.tagName;

    // Adds "--active" to the end of project class when clicked
    button.classList.toggle("--active");

    // If the class contains "--active", expand target and change the class
    if (button.classList.contains("--active") && tagName !== "A") {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.transition = "1s ease-out";
      toggleClass.className = "fas fa-minus";
    } 
    else if (!button.classList.contains("--active") && tagName !== "A") {
      content.style.maxHeight = 0;
      toggleClass.className = "fas fa-plus";
    }
  });
});