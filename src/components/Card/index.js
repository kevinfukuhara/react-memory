import React, { Component } from 'react';

import "./card.css"

class Card extends Component{
    state = {
        style: {backgroundImage:"url(" + this.props.character.image + ")"}
    }

    render(){
        return(
            <div className="card-item" style={this.state.style} value={this.props.character.id} onClick={() => this.props.handleGuess(this.props.character.id)}>
            </div>
        );
    }
}

export default Card;