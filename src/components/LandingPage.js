import React from 'react'
import ZigZag from './ZigZag'

function LandingPage() {

    return (
        <div className="landingPage">
            <div className="nav">
                <a href="#">About</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
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