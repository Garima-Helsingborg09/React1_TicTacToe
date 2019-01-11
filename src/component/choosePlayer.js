import React, { Component } from 'react';

class Player extends Component {
    handleForm(e) {
        e.preventDefault();
       (this.props.player(e.target.player.value)); // player in parenthese defines the player-name.
    }

    render() {
        return (
        <form onSubmit = {(e) => this.handleForm(e)}>
            <label> 
                <input type='radio' name='player' value='X'></input>
                Player X
            </label>
            &nbsp;
            <label> 
                <input type='radio' name='player' value='O'></input>
                Player O
            </label>
            &nbsp;
            <button type='submit' value='Start'>Start</button>
           
       </form>
       
        )
    }
}

export default Player;