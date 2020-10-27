const projects = document.querySelectorAll(".project");

function toggleActive(e) {
  // Declares content id as a variable
  const content = this.lastElementChild; 
  // Declares icon in nav as variable
  const toggleClass = this.firstElementChild.children[1].lastElementChild; 
  const tagName = e.target.tagName;

  // Adds "--active" to the end of project class when clicked
  this.classList.toggle("--active");

  // If the class contains "--active", expand target and change the class
  if (this.classList.contains("--active") && tagName !== "A") {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.transition = "1s ease-out";
    toggleClass.className = "fas fa-minus";
  } else if (!this.classList.contains("--active") && tagName !== "A") {
    content.style.maxHeight = 0;
    toggleClass.className = "fas fa-plus";
  }
}

export const collapseExpand = projects.forEach(project => project.addEventListener("click", toggleActive));