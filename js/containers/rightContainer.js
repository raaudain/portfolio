// Find right-container id
export const right = document.querySelector("#right-container");

// Create elements
const skills = document.createElement("section");
const projects = document.createElement("section");
const aboutMe = document.createElement("section");
const skillsHeader = document.createElement("h3");
const projectsHeader = document.createElement("h3");
const aboutMeHeader = document.createElement("h3");

// Add text
skillsHeader.textContent = "SKILLS";
projectsHeader.textContent = "PROJECTS";
aboutMeHeader.textContent = "ABOUT ME";

// Add attributes
skills.id = "skills";
projects.id = "projects";
aboutMe.id = "about-me";

// Append child nodes to parent
right.appendChild(skills);
right.appendChild(projects);
right.appendChild(aboutMe);
skills.appendChild(skillsHeader);
projects.appendChild(projectsHeader);
aboutMe.appendChild(aboutMeHeader);
