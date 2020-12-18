import { skills } from "../../data/index.js"


// Find skillsContainer id
export const skillsContainer = document.querySelector("#skills");

// Create element
const skillList = document.createElement("div");

// Add attribute
skillList.id = "skill-list";

// Append child node to parent
skillsContainer.appendChild(skillList);

// Creates skill element for each skill in skills array then appends skill to parent node
skills.forEach((skill) => {
  // Create elements
  const s = document.createElement("div");
  const link = document.createElement("a");
  const title = document.createElement("p");
  let image;

  // Add attributes
  s.className = "skill";
  link.href = skill.link;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  // Checks if there is an image file
  if (skill.image) {
    image = document.createElement("img");
    image.src = skill.image;
    image.alt = `${skill.name} logo`;
    image.title = skill.name;
  } else {
    image = document.createElement("i");
    image.className = skill.icon;
    image.title = skill.name;
  }

  // Add text
  title.textContent = skill.name;

  // Append child nodes to parent
  skillList.appendChild(s);
  s.appendChild(link);
  link.appendChild(image);
  link.appendChild(title);
});
