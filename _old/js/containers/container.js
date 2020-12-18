// Find body tag
export const body = document.querySelector("body");

// Create elements
const noscript = document.createElement("noscript");
const container = document.createElement("div");
const leftContainer = document.createElement("div");
const rightContainer = document.createElement("div");

// Add attributes
container.id = "container";
leftContainer.id = "left-container";
rightContainer.id = "right-container";

// Add text
noscript.textContent = "You need to enable JavaScript to view this site.";

// Append child nodes to parent
body.appendChild(noscript);
body.appendChild(container);
container.appendChild(leftContainer);
container.appendChild(rightContainer);
