import { contactInfo } from "../data/index.js"


// Find left-container id
export const left = document.querySelector("#left-container");

// Create elements
const image = document.createElement("img");
const headers = document.createElement("div");
const contact = document.createElement("div");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");

// Add text
h1.textContent = "RAMON AUDAIN";
h2.textContent = "Software Developer";

// Add attributes
image.src = "/assets/img/photo.png";
image.alt = "Photo of Ramon Audain";

headers.id = "headers";
contact.id = "contact";



contactInfo.forEach((info) => {
  const link = document.createElement("a");
  const icon = document.createElement("i");
  const text = document.createElement("span");

  link.href = info.link;
  link.id = info.id;
  icon.className = info.icon;
  icon.title = info.title;
  text.textContent = info.text;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  contact.appendChild(link);
  link.appendChild(icon);
  link.appendChild(text);
});

// Append child nodes to parent
left.appendChild(image);
left.appendChild(headers);
left.appendChild(contact);
headers.appendChild(h1);
headers.appendChild(h2);
