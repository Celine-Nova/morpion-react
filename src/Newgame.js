import React from 'react';
import './App.css';
import Board from './App.js'
function Newgame(props) {

  // console.log(props.newGame)
//   console.log('valeur '+props.square)
  return(
    <div >
      <button className="new-game" onClick={props.onClick}>
        Rejouez
      </button>
   </div>
    ); 
}
export default Newgame;