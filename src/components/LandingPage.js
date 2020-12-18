import React from 'react'
import ZigZag from './ZigZag'

function LandingPage() {

    return (
        <div className="landingPage">
            <div className="nav">
                <a href="#about"><span>About</span></a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="greeting">
                <span id="name">Ramon Audain</span>
                <span id="title">Software Developer</span>
                <ZigZag />
            </div>
        </div>
    )
}

export default LandingPage;