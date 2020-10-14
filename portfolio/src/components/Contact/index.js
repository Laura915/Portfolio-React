import React from 'react';
import gitHub from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import resume from "../../assets/resume2.svg";
import lauraResume from "../../assets/Laura_Hernandez_Resume.pdf"
import email from '../../assets/email.png';
import './style.css';

function Contact() {

    return (
        <div>
            <div className="row " id="contact-title">
                <h2 className="col-lg-12" >Contact Me</h2>
            </div>
            <div className="row contactDiv" >
                <div className="col-md-3 contact-info">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Laura915">
                        <img src={gitHub} id="contact-page-img" alt="GitHub icon" />
                    </a>
                    <p className="email-item">GitHub</p>
                </div>
                <div className="col-md-3 contact-info">
                    <a target="_blank" rel="noopener noreferrer" href={lauraResume}>
                        <img src={resume} id="contact-page-img" alt="Resume icon" />
                    </a>
                    <p className="email-item">Resume</p>
                </div>
                <div className="col-md-3 contact-info">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/---laura-hernandez---">
                        <img src={linkedin} id="contact-page-img" alt="LinkedIn icon" />
                    </a>
                    <p className="email-item">LinkedIn</p>
                </div>
            </div>
            <div className="row contactDiv">
                <div className="email-align">
                    <a className="email-item" href="mailto:lhernan53112@gmail.com">
                        <img  src={email} id="contact-page-img" alt="email icon" />
                    </a>
                    <p className="email-item" >lhernan53112@gmail.com</p>
                </div>
            </div>

        </div>
    );
}

export default Contact;