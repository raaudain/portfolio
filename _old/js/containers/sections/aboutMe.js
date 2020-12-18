import { paragraphs } from "../../data/index.js"


// Find about-me id
export const about = document.querySelector("#about-me");

// Create elements
const div = document.createElement("div");

// Creates paragraph element, adds text from paragraph array and appends to parent node
paragraphs.forEach((paragraph) => {
  const p = document.createElement("p");
  p.textContent = paragraph.content;
  div.append(p);
});

// Append
about.appendChild(div);
