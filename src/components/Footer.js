import React from 'react'

function Footer() {
    return (
        <>
            <div id="footerBlend" />
            <div className="footer">
                <div className="content">
                    <div className="credit">
                        <span>Designed and coded by <a href="https://www.github.com/raaudain" target="_blank" rel="noopener noreferrer">Ramon Audain</a></span>
                        <span>Background photo by <a href="https://unsplash.com/@imgly?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">img.ly</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a></span>
                    </div>
                    <div className="links">
                        <a href="#header">Go to Top</a>
                        <a href="#about">About</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;