// Find left-container id
const left = document.querySelector("#left-container");

// Create elements
const image = document.createElement("img");
const headers = document.createElement("div");
const contact = document.createElement("div");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const mail = document.createElement("a");
const mailIcon = document.createElement("i");
const mailText = document.createElement("span");
const linked = document.createElement("a");
const linkedIcon = document.createElement("i");
const linkedText = document.createElement("span");
const git = document.createElement("a");
const gitIcon = document.createElement("i");
const gitText = document.createElement("span");

// Add text
h1.textContent = "RAMON AUDAIN";
h2.textContent = "Software Developer";
mailText.textContent = "ramonaudain@gmail.com";
linkedText.textContent = "www.linkd.in/1M6NE1I";
gitText.textContent = "www.github.com/raaudain";

// Add attributes
image.src = "assets/img/photo.png";
image.alt = "Photo of Ramon Audain";

headers.id = "headers";
contact.id= "contact";

mail.href = "mailto:ramonaudain@gmail.com";
mail.id = "mail";
mailIcon.className = "fas fa-envelope";
mailIcon.title = "Email";

linked.href = "https://www.linkedin.com/in/ramon-audain/";
linked.id = "linked";
linked.target = "_blank";
linked.rel = "noopener noreferrer";
linkedIcon.className = "fab fa-linkedin";
linkedIcon.title = "LinkedIn profile";

git.href = "https://github.com/raaudain";
git.id = "git";
git.target = "_blank";
git.rel = "noopener noreferrer";
gitIcon.className = "fab fa-github";
gitIcon.title = "GitHub profile";

// Append child nodes to parent
left.appendChild(image);
left.appendChild(headers);
left.appendChild(contact);
headers.appendChild(h1);
headers.appendChild(h2);
contact.appendChild(mail);
contact.appendChild(linked);
contact.appendChild(git);
mail.appendChild(mailIcon);
mail.appendChild(mailText);
linked.appendChild(linkedIcon);
linked.appendChild(linkedText);
git.appendChild(gitIcon);
git.appendChild(gitText);