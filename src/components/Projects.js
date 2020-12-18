import React from 'react'
import { projects } from "../data"
import ZigZag from './ZigZag'

function Projects() {

    return (
        <section>
            <h2 className="sectionTitle">Projects</h2>
            <ZigZag />
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.name}
                        <div>{project.tech}</div>
                    </h3>
                   <img src={project.image} />
                   <a href={project.projectLink}>Demo</a>
                </div>
            ))}
        </section>
    )
}

export default Projects;