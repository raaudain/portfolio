<?php
$projects = [
    // Sauti Marketplace
    [
        "name" => "Sauti Marketplace",
        "projectLink" => "https://sauti-marketplace.raaudain.vercel.app/",
        "gitHubLink" => "https://github.com/raaudain/sauti-marketplace",
        "tech" => "JavaScript, React, Redux, Axios, Less, HTML, Node.js, Express, SQLite, Knex.js, CORS, Helmet, JSON Web Token, bcrypt, Jest, Supertest",
        "description" => "A full stack application with form validation and authentication capabilities.",
        "image" => "assets/img/projects/sauti.png",
    ],
    // NASA APOD
    [
        "name" => "NASA APOD",
        "projectLink" => "https://nasa-apod.raaudain.now.sh/",
        "gitHubLink" => "https://github.com/raaudain/nasa-apod",
        "tech" => "JavaScript, React, Axios, CSS, HTML",
        "description" => "Every wondered what's going on in outer space? NASA APOD gives you a glimpse of what's going on in the universe.",
        "image" => "assets/img/projects/apod.png",
    ],
    // Gotta Do
    [
        "name" => "Gotta Do",
        "projectLink" => "https://gotta-do.raaudain.now.sh/",
        "gitHubLink" => "https://github.com/raaudain/gotta-do",
        "tech" => "JavaScript, React, Sass, HTML",
        "description" => "Today's world can be hectic and keeping up with all the things that need done can be a job in itself. Gotta Do is an installable web application that keeps track of all of your errands so you don't have to.",
        "image" => "assets/img/projects/gotta.png",
    ],
    // Tennis Game
    [
        "name" => "Tennis Game",
        "projectLink" => "https://tennis-game.raaudain.now.sh",
        "gitHubLink" => "https://github.com/raaudain/tennis-game",
        "tech" => "JavaScript, CSS, HTML",
        "description" => "Have time to kill? Play a clone of an arcade classic",
        "image" => "assets/img/projects/tennis.png",
    ],
    // GetPaid
    [
        "name" => "GetPaid",
        "projectLink" => "",
        "gitHubLink" => "https://github.com/raaudain/Get-Paid",
        "tech" => "Python, Selenium",
        "description" => "If the company you work for uses SpringAhead and you keep forgetting to fill out your hours, GetPaid is for you. GetPaid is a Python script that automatically fills out your timecard.",
        "image" => "",
    ],
    // My Portfolio
    [
        "name" => "My Porfolio",
        "projectLink" => "https://www.ramonaudain.com",
        "gitHubLink" => "https://github.com/raaudain/portfolio",
        "tech" => "PHP, JavaScript, HTML, Sass",
        "description" => "No need for an image. You're already on the site.",
        "image" => "",
    ],
];
?>

<section id="projects">
    <h3>PROJECTS</h3>
    <?php foreach ($projects as $x) { ?>
        <button class="project">
            <div class="project-header">
                <h2><?php echo $x["name"]; ?></h2>
                <nav>
                    <?php if ($x["projectLink"]) echo "<a href='" . $x["projectLink"] . "' target='_blank' rel='noopener noreferrer'>Demo</a>"; ?>
                    <a href="<?php echo $x["gitHubLink"]; ?>" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <i class="fas fa-plus"></i>
                </nav>
            </div>
            <p>Tech: <?php echo $x["tech"]; ?></p>
            <div class="content">
                <p><?php echo $x["description"]; ?></p>
                <?php if ($x["image"]) echo "<img src='" . $x["image"] . "' alt='" . $x["name"] . "' />"; ?>
            </div>
        </button>
    <?php } ?>
</section>
