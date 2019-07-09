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

  handleGuess = id=> {
    console.log("Triggered HandleGuess method: id - " + id );

    // Check if the guess's id already exists in the selection array
    if(this.state.selection.includes(id)) {
      // CASE: Incorrect! - User has guessed this before
      console.log("INCORRECT");

    } else {
      console.log("CORRECT!");
      console.log("Trying to shuffle!");

      this.child.reorderBoard();

    }
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavBar 
            yourScore={this.state.yourScore}
            highScore={this.state.highScore}
            guessStatus={this.state.guessStatus}
          />

          {/* <Route exact path="/" component={Game} 
            handleGuess={this.handleGuess}
          /> */}
          {/* <Game onRef={ref => (this.child = ref)} /> */}
          <Route 
            path="/"
            render={(props) => 
              <Game 
                handleGuess={this.handleGuess}
                onRef={ref => (this.child = ref)}
              />}
          />
          {/* <Game /> */}

        </Router>
      </React.Fragment>
    );
  }
}

export default App;
