import React from 'react'
import { projects } from "../data"
import ZigZag from './ZigZag'

function Projects() {
    return (
        <section>
            <h2 className="sectionTitle" id="projects">Projects</h2>
            <ZigZag />
            {projects.map((project, index) => (
                <div className="project" key={index}>
                    <h3>{project.name}
                        <div>{project.tech}</div>
                    </h3>
                   {project.image ? (<img src={process.env.PUBLIC_URL + project.image} />) : null}

                   <div>
                       {project.projectLink ? (<a href={project.projectLink}>Demo</a>) : null}
                       {project.gitHubLink ? (<a href={project.gitHubLink}>GitHub</a>) : null}
                   </div>
                </div>
            ))}
        </section>
    )
}

export default Projects;