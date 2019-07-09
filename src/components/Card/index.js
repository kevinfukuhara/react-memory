import React, { Component } from 'react';

import "./card.css"

class Card extends Component{
    state = {
        style: {backgroundImage:"url(" + this.props.character.image + ")"}
    }

    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    changeImage = image => {
        // Update the state in this component
        this.setState( { style: {backgroundImage:"url(" + image + ")"} } );
        // console.log("Changing the image state!")
    }

    render(){
        return(
            <div className="card-item" style={this.state.style} value={this.props.character.id} name={this.props.character.name} onClick={() => this.props.handleGuess(this.props.character.id)}>
            </div>
        );
    }
}

export default Card;