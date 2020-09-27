const left = document.querySelector("#left-container");

console.log(left)

const headers = document.createElement("div");
const contact = document.createElement("div");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");

h1.textContent = "RAMON AUDAIN";
h2.textContent = "Software Developer";

headers.id = "headers";
contact.id= "contact";

left.appendChild(headers);
left.appendChild(contact);
headers.appendChild(h1);
headers.appendChild(h2);