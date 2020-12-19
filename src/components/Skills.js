import React from 'react'
import { skills } from "../data"
import ZigZag from './ZigZag'

function Skills() {

    return (
        <section>
            <h2 className="sectionTitle" id="skills">Skills</h2>
            <ZigZag />
            {skills.map((skill, index) => (
                <div key={index}>
                    {skill.image ? (<img src={process.env.PUBLIC_URL + skill.image} title={skill.name} alt={skill.name} />) : (<i className={skill.icon} title={skill.name}></i>) }
                </div>
            ))}
        </section>
    )
}

export default Skills;