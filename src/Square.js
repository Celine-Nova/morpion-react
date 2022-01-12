import React from 'react';
import './App.css';


function Square(props) {

  const value = props.value;
  return (
    <div>
    <div>
      {value === 'X'? (
        // Quand on clique sur un Square, la fonction onClick fournie par le Board est appelée
        <button className="square"  style={{color:'red'}} onClick={props.onClick}>
            {value} 
        </button>)
      :(
        <button className="square"  style={{color:'blue'}} onClick={props.onClick}>
        {value}
      </button>
      )
      }
    </div>
    
    </div>
    ); 
  }
  export default Square;

// Ancien code avec Class Square
/*
export defaultclass Square extends React.Component {
    render() {
      return (
        <button
          className="square"
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }
  */