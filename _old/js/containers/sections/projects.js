import { projects } from "../../data/index.js"


// Find projects id
export const projectContainer = document.querySelector("#projects");

projects.forEach((project) => {
  // Create elements
  const button = document.createElement("button");
  const projectHeader = document.createElement("div");
  const h2 = document.createElement("h2");
  const nav = document.createElement("nav");
  const pLink = document.createElement("a");
  const gLink = document.createElement("a");
  const icon = document.createElement("i");
  const tech = document.createElement("p");
  const content = document.createElement("div");
  const desc = document.createElement("p");
  const image = document.createElement("img");

  // Add attributes
  button.className = "project";
  projectHeader.className = "project-header";
  pLink.href = project.projectLink;
  pLink.target = "_blank";
  pLink.rel = "noopener noreferrer";
  gLink.href = project.gitHubLink;
  gLink.target = "_blank";
  gLink.rel = "noopener noreferrer";
  icon.className = "fas fa-plus";
  content.className = "content";
  if (!project.image) {
    console.info("Image unavailable for", project.name);
  } else {
    image.src = project.image;
    image.alt = project.name;
  }

  // Add text
  pLink.textContent = "Demo";
  gLink.textContent = "GitHub";
  h2.textContent = project.name;
  tech.textContent = project.tech;
  desc.textContent = project.description;

  // Append child nodes to parent
  projectContainer.appendChild(button);
  button.appendChild(projectHeader);
  button.appendChild(tech);
  button.appendChild(content);
  projectHeader.appendChild(h2);
  projectHeader.appendChild(nav);
  project.projectLink ? nav.append(pLink) : null;
  nav.appendChild(gLink);
  nav.appendChild(icon);
  content.appendChild(desc);
  project.image ? content.appendChild(image) : null;
});
