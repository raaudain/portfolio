import React from 'react'
import { skills } from "../data"
import ZigZag from './ZigZag'

function Skills() {
    return (
        <section id="skills">
            <h2 className="sectionTitle">Skills</h2>
            <ZigZag />
            
            <div id="skill-list">
                {skills.map((skill, index) => (
                    <div className="skill" key={index}>
                        <a href={skill.link} target="_blank" rel="noopener noreferrer">
                            {skill.image ? (<img src={process.env.PUBLIC_URL + skill.image} title={skill.name} alt={skill.name} />) : (<i className={skill.icon} title={skill.name}></i>) }
                            <p>{skill.name}</p>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;