import React from 'react';
import "./style.css";

import aboutMePic from '../../assets/laura_prof.png';

function AboutMe() {

    return (
        <div>
        {/* Title: About Me  row2 */}
        <div className="row " id="about-me-title">
            <h2 className="col-lg-12" >About Me </h2>
        </div>
        {/* Content: About Me row3 */}
        <div className="row " id="about-Me-Div">

            <div className=" col-md-4" id="profileDiv">

                <img id="profile-pic" src={aboutMePic} alt="Laura smiling" />
            </div>
            <div className=" col-md-8" id="bioDiv">
                <p className="bioP">
                    I am a web developer with the knowledge, expertise, and experience to design and
                    build
                    creative virtual spaces. My experience at the University of North Carolina Coding Bootcamp
                    served as my deep-dive into the world of coding. I learned JavaScript, jQuery, Node.js, CSS,
                    HTML, Bootstrap, Materialize, GitHub. With these skills, I have developed projects with
                    efficient
                    and testable code. Now, I am looking to work with a team or organization that shares my
                    passion in producing meaningful work.</p>
            </div>
        </div>

</div>
    );
  }
  
  export default AboutMe;