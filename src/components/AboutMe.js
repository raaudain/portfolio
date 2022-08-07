import React from "react";
import ZigZag from "./ZigZag";

function AboutMe() {
  return (
    <section id="about">
      <h2 className="sectionTitle">About</h2>
      <ZigZag />
      <div>
        <p>Software engineer focusing on web development and automation.</p>
      </div>
      <hr />
    </section>
  );
}

export default AboutMe;
