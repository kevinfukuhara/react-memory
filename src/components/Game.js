import React, { Component } from 'react';
import Card from "./Card"

import chars from "../card-seeds.json";

class Game extends Component{
    state = {
        characters: chars,
        boardPlacement: chars

    }

    componentDidMount(){
        // By default shuffle the board
        this.setState({ boardPlacement:this.shuffleBoard(this.state.characters) });
    }

    shuffleBoard = charOrder => {
        // Shuffle the characters within boardPlacement
        for (let i = charOrder.length - 1; i > 0; i--) {

            console.log(charOrder[i]);

            const j = Math.floor(Math.random() * (i + 1));
            [charOrder[i], charOrder[j]] = [charOrder[j], charOrder[i]];
        }

        return charOrder;
    };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[0]}
                            handleGuess={this.props.handleGuess}
                        />
                    </div>
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[1]}
                            handleGuess={this.props.handleGuess}
                        />
                    </div>
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[2]}
                            handleGuess={this.props.handleGuess}
                        />
                        {/* <Card 
                            character={this.state.boardPlacement[2]}
                        /> */}
                    </div>
                </div>

                <div className="row">
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[3]}
                            handleGuess={this.props.handleGuess}
                        />
                    </div>
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[4]}
                            handleGuess={this.props.handleGuess}
                        />
                    </div>
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[5]}
                            handleGuess={this.props.handleGuess}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[6]}
                            handleGuess={this.props.handleGuess}
                        />
                    </div>
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[7]}
                            handleGuess={this.props.handleGuess}
                        />
                    </div>
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[8]}
                            handleGuess={this.props.handleGuess}
                        />
                    </div>
                </div>

            </div>

        )
    }

}

export default Game;