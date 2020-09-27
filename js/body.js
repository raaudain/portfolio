const body = document.querySelector("body");

const noscript = document.createElement("noscript");
noscript.textContent = "You need to enable JavaScript to view this site.";
const contain = document.createElement("div");
const leftContainer = document.createElement("div");
const rightContainer = document.createElement("div");

// Add ids
contain.id = "container";
leftContainer.id = "left-container";rightContainer.id = "right-container";

// Append
body.appendChild(noscript);
body.appendChild(contain);
contain.appendChild(leftContainer);
contain.appendChild(rightContainer);