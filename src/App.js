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
    guessStatus: ""
  }

  handleGuess = id => {
    console.log("Triggered HandleGuess method: id - " + id);

    console.log(this.state.selection);

    // Check if the guess's id already exists in the selection array
    if (this.state.selection.includes(id)) {
      // CASE: Incorrect! - User has guessed this before
      console.log("INCORRECT");
       // Send incorrect guess message to the NavBar via the guessStatus state
       let guessStatus = "Incorrect..."
       this.setState({ guessStatus });

      // Reset user Score
      let yourScore = 0;
      this.setState({ yourScore });

      // reset the selection array
      let selection = [];
      this.setState({ selection })

    } else {
      console.log("CORRECT!");
      // Send correct guess to the NavBar via the guessStatus state
      let guessStatus = "Correct!"
      this.setState({ guessStatus });

      // Add the user's guess into the selection 
      let newArray = this.state.selection;
      newArray.push(id);
      this.setState({ selection: newArray });

      // Add +1 to yourScore
      let yourNewScore = this.state.yourScore;
      yourNewScore = yourNewScore + 1;
      this.setState({ yourScore: yourNewScore })

      // Compare yourScore to Highscore
      if (yourNewScore > this.state.highScore) {
        this.setState({ highScore: yourNewScore });
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

          <div className="container">
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
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
