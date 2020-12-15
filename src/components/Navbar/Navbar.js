import React from 'react';
import {NavLink} from "react-router-dom"

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link"> Page d'acceuil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/pays" exact className="nav-link">Les pays</NavLink> 
                        </li>
                    </ul>
                   
                </div>
                </nav>
        </div>
    );
};

export default Navbar;