const paragraphs = [
  {
    content: "So how did I get into software development?",
  },
  {
    content: "Well, after being told by my manager to fill out my timesheet one too many times, I decided to try and write a Python script that would do the work for me. So one Saturday, after 8 hours of researching and coding, I eventually came up with something that worked. After my success, I began thinking that maybe I could do this for a living. So I went back to school and the rest is history.",
  },
  {
    content: "Currently, I live in the Bay Area, CA. Rent's expensive, but I love the weather.",
  },
  {
    content: "During my free time, I enjoy messing around with my computer, watching movies and TV shows, playing video games, and attempting to exercise.",
  },
];

// Find about-me id
export const about = document.querySelector("#about-me");

// Create elements
const div = document.createElement("div");

// Creates paragraph element, adds text from paragraph array and appends to parent node
paragraphs.forEach((paragraph) => {
  const p = document.createElement("p");
  p.textContent = paragraph.content;
  div.append(p);
});

// Append
about.appendChild(div);
