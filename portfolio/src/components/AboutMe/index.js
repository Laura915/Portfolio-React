import React from 'react';
import Skills from '../Skills';
import "./style.css";

import aboutMePic from '../../assets/laura_prof.png';

function AboutMe() {

    return (
        <div>
            {/* Title: About Me */}
            <div className="row " id="about-me-title">
                <h2 className="col-lg-12" >About Me </h2>
            </div>
            {/* Content: About Me */}
            <div className="row" id="about-Me-Div">
                <div className="col-md-4 " id="profileDiv">
                    <img id="profile-pic" src={aboutMePic} alt="Laura smiling"/>
                </div>
                <div className=" col-md-8" id="bioDiv">
                    <p className="bioP">
                        I am a Full developer with the knowledge, expertise, and experience to design and
                        build creative virtual spaces. My experience at the University of North Carolina Coding Bootcamp
                        served as my deep-dive into the world of coding. I have developed projects with
                        efficient and testable code. Now, I am looking to work with a team or organization that shares my
                        passion in producing meaningful work.
                    </p>
                </div>
            </div>
            {/* Title: Skills */}
            <div className="row ">
                <h2 className="col-lg-12">Skills</h2>
            </div>
            {/* Content: Skills */}
            <div className="row" id="skills-Div">
            <Skills/>
            </div>

        </div>
    );
}

export default AboutMe;