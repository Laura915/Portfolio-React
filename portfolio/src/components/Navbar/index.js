import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="/">
                Laura's Portfolio
       </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <ul className="navbar-nav " id="navbar-links-align">

                    <li className="nav-item nav-link ">
                        <Link
                            to="/About Me"
                            className={window.location.pathname === "/About Me" ? "nav-link active" : "nav-link"} >
                                 About Me
                        </Link>
                    </li>

                    <li className="nav-item nav-link " >
                        <Link
                            to="/Works"
                            className={window.location.pathname === "/Works" ? "nav-link active" : "nav-link"}>
                            Works
                         </Link>
                    </li>

                    <li className=" nav-item nav-link " >
                        <Link
                            to="/Contact"
                            className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
                                Contact
                             </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;