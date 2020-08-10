import React from 'react';
import gitHub from "../../assets/github.png";
import linkin from "../../assets/linkedin.png";
import resume from "../../assets/resume.png";

function Contact() {

    return (
        <div>
            <div className="row " id="contact-title">
                <h2 className="col-lg-12" >GitHub? Resume? Linkin?</h2>
            </div>
            <div className="row" id="contactDiv">
                <div className="col-md-3 contact-info"><a target="_blank" href="https://github.com/Laura915">
                    <img src={gitHub} /></a>
                </div>
                <div className="col-md-3 contact-info">
                    <a target="_blank" href="https://docs.google.com/document/d/13ArlAIxCpcHps88ZAzAdblW3xSqhC_fwJLsnfRVwTAs/edit?usp=sharing">
                        <img src={resume} /></a>
                </div>
                <div className="col-md-3 contact-info"><a target="_blank" href="https://www.linkedin.com/in/---laura-hernandez---">
                    <img src={linkin} /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;