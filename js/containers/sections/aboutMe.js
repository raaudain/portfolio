// Find about-me id
export const about = document.querySelector("#about-me");

// Create elements
const div = document.createElement("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");

// Add text
p1.textContent = "So how did I get into software development?";
p2.textContent = "Well, after being told by my manager to fill out my timesheet one too many times, I decided to try and write a Python script that would do the work for me. So one Saturday, after 8 hours of researching and coding, I eventually came up with something that worked. After my success, I began thinking that maybe I could do this for a living. So I went back to school and the rest is history.";
p3.textContent = "Currently, I live in the Bay Area, CA. Rent's expensive, but I love the weather.";
p4.textContent = "During my free time, I enjoy messing around with my computer, watching movies and TV shows, playing video games, and attempting to exercise.";

// Append child nodes to parent
about.appendChild(div);
div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);
div.appendChild(p4);