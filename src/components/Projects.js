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
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              <img src={process.env.PUBLIC_URL + project.image} alt={project.name} />
            </a>
          </div>
          <div className="pInfo">
            <div>
              <h3>{project.name}</h3>
              <h4>{project.tech}</h4>
            </div>
            <div>
              <p>{project.description}</p>
            </div>
            <div className="pButtons">
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">Demo</a>
              <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      ))}
      <hr />
    </section>
  );
}

export default Projects;
