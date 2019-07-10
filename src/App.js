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

    console.log(this.state.selection);

    // Check if the guess's id already exists in the selection array
    if(this.state.selection.includes(id)) {
      // CASE: Incorrect! - User has guessed this before
      console.log("INCORRECT");

      // Reset user Score
      let zeroed = 0;
      this.setState({ yourScore : zeroed });

      // reset the selection array
      let newArray = [];
      this.setState({ selection : newArray })

    } else {
      console.log("CORRECT!");
      // Add the user's guess into the selection 
      let newArray = this.state.selection;
      newArray.push(id);
      this.setState( { selection : newArray } );

      // Add +1 to yourScore
      let yourNewScore = this.state.yourScore;
      yourNewScore= yourNewScore + 1;
      this.setState( {yourScore: yourNewScore} )

      // Compare yourScore to Highscore
      if(yourNewScore > this.state.highScore) {
        this.setState({ highScore : yourNewScore });
      }
    } 
    
    // Shuffle the Board
    this.child.reorderBoard();      
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
          {/* <Game /> */}
          <Route 
            path="/"
            render={(props) => 
              <Game 
                handleGuess={this.handleGuess}
                onRef={ref => (this.child = ref)}
              />}
          />

        </Router>
      </React.Fragment>
    );
  }
}

export default App;
