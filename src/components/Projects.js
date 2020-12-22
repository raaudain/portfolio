import React from 'react'
import { projects } from "../data"
import ZigZag from './ZigZag'

function Projects() {
    return (
        <section id="projects">
            <h2 className="sectionTitle">Projects</h2>
            <ZigZag />
            {projects.map((project, index) => (
                <div className="project" key={index}>
                    <div>
                       <img src={process.env.PUBLIC_URL + project.image} alt={project.name}/>
                    </div>
                    <div>
                        <div>
                            <h3>{project.name}</h3>
                            <div>{project.tech}</div>
                        </div>
                       <div className="pbuttons">
                           {project.projectLink ? (<a href={project.projectLink}>Demo</a>) : null}
                           {project.gitHubLink ? (<a href={project.gitHubLink}>GitHub</a>) : null}
                       </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Projects;