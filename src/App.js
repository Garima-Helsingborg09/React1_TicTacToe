import React, { Component } from 'react';
import './App.css';
import Status from './component/status';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winner: null, // this is to restrict player to play further after either player has won.
    }
  }

  checkWinner() {
    let winLines = [
      /* 1st HLIne Match */["0", "1", "2"],
     /* 2nd HLIne Match */["3", "4", "5"],
      /* 3rd HLIne Match */["6", "7", "8"],
     /* 1st VLIne Match */["0", "3", "6"],
     /* 2nd VLIne Match */["1", "4", "7"],
     /* 3rd VLIne Match */["2", "5", "8"],
     /* L-R DLIne Match */["0", "4", "8"],
     /* R-L DLIne Match */["2", "4", "6"],
    ]
    for (let index = 0; index < winLines.length; index++) {
      const [a, b, c] = winLines[index];
      // Matching
      if (this.state.board[a] /* prevent the matching of empty-cell */ && this.state.board[a] === this.state.board[b] && this.state.board[a]
        === this.state.board[c]) {
       /* alert('You Won'); */
        this.setState({           // to announce the winner.
          winner: this.state.player,
        })
       } 
      }
    }
  
  handleClick(index) {
    if (this.state.player && !this.state.winner) {
      let newBoard = this.state.board
      if (this.state.board[index] === null && !this.state.winner /* once someone has won the game not to allow further click-event.*/) {
        newBoard[index] = this.state.player
        this.setState({                                   // when it is placed inside handleclick this help to prevent double-click-change-playerMark.
          board: newBoard,
          player: this.state.player === "X" ? "O" : "X"   // switch to either player
          //console.log(this.state.board)
          //  console.log(index)
        })
        this.checkWinner(); // calling function of line 15
      }
    }
  }
  setPlayer(player) {                               //This is to define the player function Line: 70
    this.setState({ player })
    // console.log(player) 
  }

  renderBoxes() {
    return this.state.board.map(          // this is to form 9 boxes 
      (box, index) =>
        <div className='box'
          key={index}                         // Each child in an array should have a unique Key.
          onClick={() => this.handleClick(index)}>
          {box}
        </div>//{box} is not the class one.  This is the way to call a function in React.
      //handleClick is the function so parenthesis
    )
  }

  reset() {
    this.setState({
      board: Array(9).fill(null),
      player: null,
      winner: null
    })
  }

  render() {                                   // in render we will do javascript

    return (                               // in return we will do  JSX
      <div className="container">
        <h1 className="gameName">Tic Tac Toe</h1>
        <Status
          player={this.state.player}
          setPlayer={(e) => this.setPlayer(e)}
          winner={this.state.winner} >
        </Status>
        <div className="board">
          {this.renderBoxes()}
        </div>
        <button className="resetButton" onClick={() => this.reset()}>Reset</button>
      </div>
    );
  }
}

export default App;
