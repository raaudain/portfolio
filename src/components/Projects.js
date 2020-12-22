import React from "react";
import { projects } from "../data";
import ZigZag from "./ZigZag";

function Projects() {
  return (
    <section id="projects">
      <h2 className="sectionTitle">Projects</h2>
      <ZigZag />
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <div>
            <img src={process.env.PUBLIC_URL + project.image} alt={project.name} />
          </div>
          <div className="pInfo">
            <div>
              <h3>{project.name}</h3>
              <h4>{project.tech}</h4>
            </div>
            <div>
              <p>{project.description}</p>
            </div>
            <div className="pbuttons">
              <a href={project.projectLink}>Demo</a>
              <a href={project.gitHubLink}>GitHub</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
