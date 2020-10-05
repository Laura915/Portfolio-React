import React from 'react';
import "./style.css";
import {Link} from "react-router-dom";

function Home() {

    return (
        <>
            <div id="my-background">
                <div className="jumbotron" id="welcome-sign">
                    <h1 className="display-4">Hello, I'm Laura</h1>
                    <span className="second-line"> Full Stack Web Developer</span>
                    <p className="lead">Get to know more about me and my journey, and check out my work!</p>
                    <Link to={"/Works"}>
                    <button className="btn btn-light">View My Work</button>
                    </Link>   
                </div>
            </div>
        </>
    );
}

export default Home;
