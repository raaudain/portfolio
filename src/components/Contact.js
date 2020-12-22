import React from 'react'
import { contactInfo } from "../data"
import ZigZag from './ZigZag'

function Contact() {

    return (
        <section>
            <h2 className="sectionTitle" id="contact">Contact</h2>
            <ZigZag />
            <p>You can find me on</p>
            {contactInfo.map((info, index) => (
                <div key={index}>
                   <a href={info.link}>{info.text}</a>
                </div>
            ))}
        </section>
    )
}

export default Contact;