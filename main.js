document.querySelectorAll(".project").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.lastElementChild; // Declares content id as a variable
    const toggleClass = button.firstElementChild.children[1].lastElementChild; // Declares icon in nav as variable
    
    // Adds "--active" to the end of project class when clicked
    button.classList.toggle("--active");

    // If the class contains "--active", expand target and change the class
    if (button.classList.contains("--active")) {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.transition = "1s ease-out";
      toggleClass.className = "fas fa-minus";
    } 
    else {
      content.style.maxHeight = 0;
      toggleClass.className = "fas fa-plus";
    }
  });
});





// const project = document.querySelectorAll(".project")

// project.forEach(item => {
//     item.addEventListener("mouseenter", () => {
//         item.style.transform = "scale(1.02)";
//         item.style.transition = "1s";
//     })

//     item.addEventListener("mouseleave", () => {
//         item.style.transform = "scale(1)";
//     })
// })