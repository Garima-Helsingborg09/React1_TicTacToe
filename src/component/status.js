import React, { Component } from 'react';

import Player from './choosePlayer';


class Status extends Component {
    handleSetPlayer(e) {
        this.props.setPlayer(e)
    }
    renderHTML() {
        if (this.props.winner) {
            return <h2>Winner is {this.props.winner}</h2>
        }
        else {
            return (
                this.props.player ?
                    <h2 className="playerTurn">Next Player is {this.props.player}</h2> :
                    <Player player={(e) => this.handleSetPlayer(e)/*this is the function*/}>
                    </Player>  //From choosePlayer.js
            )
        }
    }
    render() {
        return (<span>{this.renderHTML()}</span>) // written in span to be as JSX
    }
}


export default Status;