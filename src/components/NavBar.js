import React from 'react';

import { Link } from "react-router-dom";


function NavBar(props) {
    return (
        <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">Logo</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>Your Score: {props.yourScore}</li>
            <li>High Score: {props.highScore}</li>
          </ul>
        </div>
      </nav>
    );
}

export default NavBar; 