import React from 'react';
// import M from 'materialize-css'

import { Link } from "react-router-dom";

import './NavBar.css';


class NavBar extends React.Component {

    componentDidMount(){
        // M.Nav.init(this.nav);
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    {/* <Link to="/" className="brand-logo"><NavItem href="/">React Memories - 90s Nostalgia</NavItem></Link> */}
                    <a href="/" className="brand-logo">React Memories - 90s Nostalgia</a>

                    <a href="#" className="brand-logo center">{this.props.guessStatus}</a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className="tab"><a href="#">Score: {this.props.yourScore} </a></li>
                        <li className="tab"><a href="#">High Score: {this.props.highScore} </a></li>
                    </ul>
                </div>
            </nav>
        );
    };
}

// function NavBar(props) {
//     return (
//         <nav>
//         <div className="nav-wrapper">
//           <Link to="/" className="brand-logo">React Memories - 90s Nostalgia</Link>
//           <ul id="nav-mobile" className="right hide-on-med-and-down">
//             <li>Score: {props.yourScore} </li>
//             <li>High Score: {props.highScore}</li>
//           </ul>
//         </div>
//       </nav>
//     );
// }

export default NavBar; 