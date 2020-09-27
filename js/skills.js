const skills = [
    // JavaScript
    {
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        image: "assets/img/skills/js-logo.png",
        fontAwe: "",
        name: "JavaScript",
    },
    // PHP
    {
        link: "https://www.php.net/",
        image: "assets/img/skills/php-logo.svg",
        fontAwe: "",
        name: "PHP",
    },
    // Python
    {
        link: "https://www.python.org/",
        image: "assets/img/skills/python-logo.png",
        fontAwe: "",
        name: "Python",
    },
    // React
    {
        link: "https://reactjs.org/",
        image: "",
        fontAwe: "fab fa-react",
        name: "React",
    },
    // Node.js
    {
        link: "https://nodejs.org/en/",
        image: "",
        fontAwe: "fab fa-node-js",
        name: "Node.js",
    },
    // Redux
    {
        link: "https://redux.js.org/",
        image: "assets/img/skills/redux-logo.png",
        fontAwe: "",
        name: "Redux",
    },
    // SQLite
    {
        link: "https://www.sqlite.org",
        image: "assets/img/skills/SQLite-logo.png",
        fontAwe: "",
        name: "SQLite",
    },
    // Express
    {
        link: "https://expressjs.com/",
        image: "assets/img/skills/expressjs.png",
        fontAwe: "",
        name: "Express",
    },
    // Jest
    {
        link: "https://jestjs.io/en/",
        image: "assets/img/skills/jest-logo.png",
        fontAwe: "",
        name: "Jest",
    },
    // Axios
    {
        link: "https://github.com/axios/axios",
        image: "assets/img/skills/axios-logo.png",
        fontAwe: "",
        name: "Axios",
    },
    // Selenium
    {
        link: "https://www.seleniumhq.org/",
        image: "assets/img/skills/selenium-logo.png",
        fontAwe: "",
        name: "Selenium",
    },
    // Git
    {
        link: "https://git-scm.com/",
        image: "",
        fontAwe: "fab fa-git-alt",
        name: "Git",
    },
    // Sass
    {
        link: "https://sass-lang.com/",
        image: "",
        fontAwe: "fab fa-sass",
        name: "Sass",
    },
    // Less
    {
        link: "http://lesscss.org/",
        image: "",
        fontAwe: "fab fa-less",
        name: "Less",
    },
    // CSS
    {
        link: "https://www.w3.org/Style/CSS/",
        image: "",
        fontAwe: "fab fa-css3-alt",
        name: "CSS",
    },
    // HTML
    {
        link: "https://www.w3.org/html/",
        image: "",
        fontAwe: "fab fa-html5",
        name: "HTML",
    },
    // Linux
    {
        link: "https://www.linux.org/",
        image: "assets/img/skills/linux.png",
        fontAwe: "",
        name: "Linux",
    },
];

const skillsContainer = document.querySelector("#skills");

function addSkills(link, image, fontawe, name) {
    const skillList = document.createElement("div");
    const skill = document.querySelector("#skill-list").createElement("div");
    const url = document.querySelector("#skill").createElement("a");
    const img = document.querySelector("#skill a").createElement("img");


    skillList.classList.add("skill-list");
    skill.classList.add("skill");
    

}