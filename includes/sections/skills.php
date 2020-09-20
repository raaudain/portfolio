<?php
$skills = [
    // JavaScript
    [
        "link" => "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "image" => "assets/img/skills/js-logo.png",
        "fontAwe" => "",
        "skill" => "JavaScript",
    ],
    // PHP
    [
        "link" => "https://www.php.net/",
        "image" => "assets/img/skills/php-logo.svg",
        "fontAwe" => "",
        "skill" => "PHP",
    ],
    // Python
    [
        "link" => "https://www.python.org/",
        "image" => "assets/img/skills/python-logo.png",
        "fontAwe" => "",
        "skill" => "Python",
    ],
    // React
    [
        "link" => "https://reactjs.org/",
        "image" => "",
        "fontAwe" => "fab fa-react",
        "skill" => "React",
    ],
    // Node.js
    [
        "link" => "https://nodejs.org/en/",
        "image" => "",
        "fontAwe" => "fab fa-node-js",
        "skill" => "Node.js",
    ],
    // Redux
    [
        "link" => "https://redux.js.org/",
        "image" => "assets/img/skills/redux-logo.png",
        "fontAwe" => "",
        "skill" => "Redux",
    ],
    // SQLite
    [
        "link" => "https://www.sqlite.org",
        "image" => "assets/img/skills/SQLite-logo.png",
        "fontAwe" => "",
        "skill" => "SQLite",
    ],
    // Express
    [
        "link" => "https://expressjs.com/",
        "image" => "assets/img/skills/expressjs.png",
        "fontAwe" => "",
        "skill" => "Express",
    ],
    // Jest
    [
        "link" => "https://jestjs.io/en/",
        "image" => "assets/img/skills/jest-logo.png",
        "fontAwe" => "",
        "skill" => "Jest",
    ],
    // Axios
    [
        "link" => "https://github.com/axios/axios",
        "image" => "assets/img/skills/axios-logo.png",
        "fontAwe" => "",
        "skill" => "Axios",
    ],
    // Selenium
    [
        "link" => "https://www.seleniumhq.org/",
        "image" => "assets/img/skills/selenium-logo.png",
        "fontAwe" => "",
        "skill" => "Selenium",
    ],
    // Git
    [
        "link" => "https://git-scm.com/",
        "image" => "",
        "fontAwe" => "fab fa-git-alt",
        "skill" => "Git",
    ],
    // Sass
    [
        "link" => "https://sass-lang.com/",
        "image" => "",
        "fontAwe" => "fab fa-sass",
        "skill" => "Sass",
    ],
    // Less
    [
        "link" => "http://lesscss.org/",
        "image" => "",
        "fontAwe" => "fab fa-less",
        "skill" => "Less",
    ],
    // CSS
    [
        "link" => "https://www.w3.org/Style/CSS/",
        "image" => "",
        "fontAwe" => "fab fa-css3-alt",
        "skill" => "CSS",
    ],
    // HTML
    [
        "link" => "https://www.w3.org/html/",
        "image" => "",
        "fontAwe" => "fab fa-html5",
        "skill" => "HTML",
    ],
    // Linux
    [
        "link" => "https://www.linux.org/",
        "image" => "assets/img/skills/linux.png",
        "fontAwe" => "",
        "skill" => "Linux",
    ],
];
?>

<section id="skills">
    <h3>SKILLS</h3>
    <div id="skill-list">
        <?php foreach ($skills as $x) { ?>
            <div class="skill">
                <a href="<?php echo $x["link"]; ?>" target="_blank" rel="noopener noreferrer">
                    <?php
                        if ($x["image"]) {
                            echo "<img src='" . $x["image"] . "' alt='" . $x["skill"] . " logo' title='" . $x["skill"] . "' />";
                        } 
                        else {
                            echo "<i class='" . $x["fontAwe"] . "' title='" . $x["skill"] . "'></i>";
                        }
                    ?>
                    <p><?php echo $x["skill"]; ?></p>
                </a>
            </div>
        <?php }; ?>
    </div>
</section>