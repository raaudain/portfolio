const projects = [
    // Sauti Marketplace
    {
        name: "Sauti Marketplace",
        projectLink: "https://sauti-marketplace.raaudain.vercel.app/",
        gitHubLink: "https://github.com/raaudain/sauti-marketplace",
        tech: "JavaScript, React, Redux, Axios, Less, HTML, Node.js, Express, SQLite, Knex.js, CORS, Helmet, JSON Web Token, bcrypt, Jest, Supertest",
        description: "A full stack application with form validation and authentication capabilities.",
        image: "/assets/img/projects/sauti.png",
    },
    // NASA APOD
    {
        name: "NASA APOD",
        projectLink: "https://nasa-apod.raaudain.now.sh/",
        gitHubLink: "https://github.com/raaudain/nasa-apod",
        tech: "JavaScript, React, Axios, CSS, HTML",
        description: "Every wondered what's going on in outer space? NASA APOD gives you a glimpse of what's going on in the universe.",
        image: "/assets/img/projects/apod.png",
    },
    {
        name: "Portfolio",
        gitHubLink: "https://github.com/raudain",
        tech: "JavaScript, Sass, HTML",
        description: "This portfolio was make using DOM manipulation."

    },
    // Gotta Do
    {
        name: "Gotta Do",
        projectLink: "https://gotta-do.raaudain.now.sh/",
        gitHubLink: "https://github.com/raaudain/gotta-do",
        tech: "JavaScript, React, Sass, HTML",
        description: "Today's world can be hectic and keeping up with all the things that need done can be a job in itself. Gotta Do is an installable web application that keeps track of all of your errands so you don't have to.",
        image: "/assets/img/projects/gotta.png",
    },
    // Tennis Game
    {
        name: "Tennis Game",
        projectLink: "https://tennis-game.raaudain.now.sh",
        gitHubLink: "https://github.com/raaudain/tennis-game",
        tech: "JavaScript, CSS, HTML",
        description: "Have time to kill? Play a clone of an arcade classic",
        image: "/assets/img/projects/tennis.png",
    },
    // GetPaid
    {
        name: "GetPaid",
        gitHubLink: "https://github.com/raaudain/Get-Paid",
        tech: "Python, Selenium",
        description: "If the company you work for uses SpringAhead and you keep forgetting to fill out your hours, GetPaid is for you. GetPaid is a Python script that automatically fills out your timecard.",
    },
];

// Find projects id
export const projectContainer = document.querySelector("#projects");

projects.forEach(project => {
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
    image.src = project.image;
    image.alt = project.name;

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
