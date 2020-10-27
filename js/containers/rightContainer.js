const headers = [
  {
    header: "SKILLS",
    id: "skills",
  },
  {
    header: "PROJECTS",
    id: "projects",
  },
  {
    header: "ABOUT US",
    id: "about-me",
  },
];

// Find right-container id
export const right = document.querySelector("#right-container");

headers.forEach((info) => {
  // Create elements
  const section = document.createElement("section");
  const h3 = document.createElement("h3");

  // Add attribute
  section.id = info.id;

  // Append child nodes to parent
  h3.textContent = info.header;

  // Append child nodes to parent
  right.appendChild(section);
  section.appendChild(h3);
});
