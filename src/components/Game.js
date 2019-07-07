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
                        />
                    </div>
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[1]}
                        />
                    </div>
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[2]}
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
                        />
                    </div>
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[4]}
                        />
                    </div>
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[5]}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[6]}
                        />
                    </div>
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[7]}
                        />
                    </div>
                    <div className="col s4">
                        <Card 
                            character={this.state.boardPlacement[8]}
                        />
                    </div>
                </div>

            </div>

        )
    }

}

export default Game;