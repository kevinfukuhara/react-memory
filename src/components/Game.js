import React, { Component } from 'react';
import Card from "./Card"

import chars from "../card-seeds.json";

class Game extends Component {
    state = {
        characters: chars,
        boardPlacement: chars

    }

    // componentDidMount(){
    //     // By default shuffle the board
    //     // this.setState({ boardPlacement:this.shuffleBoard(this.state.characters) });
    //     this.reorderBoard();
    // }

    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    shuffleBoard = charOrder => {
        // Shuffle the characters within boardPlacement
        for (let i = charOrder.length - 1; i > 0; i--) {

            // console.log(charOrder[i]);

            const j = Math.floor(Math.random() * (i + 1));
            [charOrder[i], charOrder[j]] = [charOrder[j], charOrder[i]];
        }

        return charOrder;
    };

    reorderBoard = () => {
        // By default shuffle the board
        // console.log(this.state.boardPlacement)
        
        
        this.setState({ boardPlacement: this.shuffleBoard(this.state.boardPlacement)});
        // console.log(this.state.boardPlacement)
        
        console.log("Board has been shuffled!");
        
        this.child1.changeImage(this.state.boardPlacement[0].image);
        this.child2.changeImage(this.state.boardPlacement[1].image);
        this.child3.changeImage(this.state.boardPlacement[2].image);
        this.child4.changeImage(this.state.boardPlacement[3].image);
        this.child5.changeImage(this.state.boardPlacement[4].image);
        this.child6.changeImage(this.state.boardPlacement[5].image);
        this.child7.changeImage(this.state.boardPlacement[6].image);
        this.child8.changeImage(this.state.boardPlacement[7].image);
        this.child9.changeImage(this.state.boardPlacement[8].image);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s4">
                        <Card
                            character={this.state.boardPlacement[0]}
                            handleGuess={this.props.handleGuess}
                            onRef={ref => (this.child1 = ref)}
                        />
                    </div>
                    <div className="col s4">
                        <Card
                            character={this.state.boardPlacement[1]}
                            handleGuess={this.props.handleGuess}
                            onRef={ref => (this.child2 = ref)}
                        />
                    </div>
                    <div className="col s4">
                        <Card
                            character={this.state.boardPlacement[2]}
                            handleGuess={this.props.handleGuess}
                            onRef={ref => (this.child3 = ref)}
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
                            onRef={ref => (this.child4 = ref)}
                        />
                    </div>
                    <div className="col s4">
                        <Card
                            character={this.state.boardPlacement[4]}
                            handleGuess={this.props.handleGuess}
                            onRef={ref => (this.child5 = ref)}
                        />
                    </div>
                    <div className="col s4">
                        <Card
                            character={this.state.boardPlacement[5]}
                            handleGuess={this.props.handleGuess}
                            onRef={ref => (this.child6 = ref)}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col s4">
                        <Card
                            character={this.state.boardPlacement[6]}
                            handleGuess={this.props.handleGuess}
                            onRef={ref => (this.child7 = ref)}
                        />
                    </div>
                    <div className="col s4">
                        <Card
                            character={this.state.boardPlacement[7]}
                            handleGuess={this.props.handleGuess}
                            onRef={ref => (this.child8 = ref)}
                        />
                    </div>
                    <div className="col s4">
                        <Card
                            character={this.state.boardPlacement[8]}
                            handleGuess={this.props.handleGuess}
                            onRef={ref => (this.child9 = ref)}
                        />
                    </div>
                </div>

            </div>

        )
    }

}

export default Game;