import React, { Component } from 'react';

import chars from "./card-seeds.json";

class Game extends Component{
    state = {
        characters: chars,
        boardPlacement: [],

    }

    componentDidMount(){

    };

}

export default Game;