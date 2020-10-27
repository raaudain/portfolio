const skills = [
  // JavaScript
  {
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    image: "/assets/img/skills/js-logo.png",
    name: "JavaScript",
  },
  // PHP
  {
    link: "https://www.php.net/",
    image: "/assets/img/skills/php-logo.svg",
    name: "PHP",
  },
  // Python
  {
    link: "https://www.python.org/",
    image: "/assets/img/skills/python-logo.png",
    name: "Python",
  },
  // React
  {
    link: "https://reactjs.org/",
    icon: "fab fa-react",
    name: "React",
  },
  // Node.js
  {
    link: "https://nodejs.org/en/",
    icon: "fab fa-node-js",
    name: "Node.js",
  },
  // Redux
  {
    link: "https://redux.js.org/",
    image: "/assets/img/skills/redux-logo.png",
    name: "Redux",
  },
  // SQLite
  {
    link: "https://www.sqlite.org",
    image: "/assets/img/skills/SQLite-logo.png",
    name: "SQLite",
  },
  // Express
  {
    link: "https://expressjs.com/",
    image: "/assets/img/skills/expressjs.png",
    name: "Express",
  },
  // Jest
  {
    link: "https://jestjs.io/en/",
    image: "/assets/img/skills/jest-logo.png",
    name: "Jest",
  },
  // Axios
  {
    link: "https://github.com/axios/axios",
    image: "/assets/img/skills/axios-logo.png",
    name: "Axios",
  },
  // Selenium
  {
    link: "https://www.seleniumhq.org/",
    image: "/assets/img/skills/selenium-logo.png",
    name: "Selenium",
  },
  // Git
  {
    link: "https://git-scm.com/",
    icon: "fab fa-git-alt",
    name: "Git",
  },
  // Sass
  {
    link: "https://sass-lang.com/",
    icon: "fab fa-sass",
    name: "Sass",
  },
  // Less
  {
    link: "http://lesscss.org/",
    icon: "fab fa-less",
    name: "Less",
  },
  // CSS
  {
    link: "https://www.w3.org/Style/CSS/",
    icon: "fab fa-css3-alt",
    name: "CSS",
  },
  // HTML
  {
    link: "https://www.w3.org/html/",
    icon: "fab fa-html5",
    name: "HTML",
  },
  // Linux
  {
    link: "https://www.linux.org/",
    image: "/assets/img/skills/linux.png",
    name: "Linux",
  },
];

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
