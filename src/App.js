import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Imported Components Made by me 
import NavBar from './components/NavBar';
import Game from './components/Game';

import './App.css';

class App extends Component {
  state = {
    yourScore: 0,
    highScore: 0,
    selection: [],
    guessStatus:"None"
  }

  render() {
    return (
      <React.Fragment>
        {/* <Router> */}
          <NavBar 
            yourScore={this.state.yourScore}
            highScore={this.state.highScore}
            guessStatus={this.state.guessStatus}
          />

          {/* <Route exact path="/" component={Game} /> */}
          <Game 
            selection={this.state.selection}
            guessStatus={this.state.guessStatus}
          />

        {/* </Router> */}
      </React.Fragment>
    );
  }
}

export default App;
