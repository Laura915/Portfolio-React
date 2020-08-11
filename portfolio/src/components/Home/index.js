import React from 'react';
import "./style.css";

function Home() {

    return (
        <section id="my-background" >
            <div className="jumbotron jumbotron-fluid">
            <div className="container" id="welcome-sign">
                    <h5 className="display-4">Hello!</h5>
                    <h5 className="display-4">I'm Laura,</h5>
                    <h5 className="display-4">a full-stack developer.</h5>
                    <p className="lead">Welcome to my portfolio website. Get to know more about me and my journey to web
                        development. Additionally, check out my works and see what kind of applications I created or helped
                        create!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Home;