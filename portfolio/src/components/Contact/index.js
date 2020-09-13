import React from 'react';
import gitHub from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import resume from "../../assets/resume2.svg";
import lauraResume from "../../assets/Laura_Hernandez_Resume.pdf"
import './style.css';

function Contact() {

    return (
        <div>
            <div className="row " id="contact-title">
                <h2 className="col-lg-12" >GitHub? Resume? Linkedin?</h2>
            </div>
            <div className="row" id="contactDiv">
                <div className="col-md-3 contact-info"><a target="_blank" href="https://github.com/Laura915">
                    <img src={gitHub} id="contact-page-img"/></a>
                </div>
                <div className="col-md-3 contact-info">
                    <a target="_blank" href={lauraResume}>
                        <img src={resume} id="contact-page-img" /></a>
                </div>
                <div className="col-md-3 contact-info"><a target="_blank" href="https://www.linkedin.com/in/---laura-hernandez---">
                    <img src={linkedin} id="contact-page-img"/></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;