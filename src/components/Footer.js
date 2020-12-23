import React from 'react'

function Footer() {
    return (
        <>
            <div id="footerBlend" />
            <div className="footer">
                <div className="content">
                    <div className="credit">
                        <span>Designed and coded by <a href="#">Ramon Audain</a></span>
                        <span>Background photo by <a href="https://unsplash.com/@imgly?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">img.ly</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
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