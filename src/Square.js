import React from 'react';
import './App.css';

function Square(props) {
    return (
        // Quand on clique sur un Square, la fonction onClick fournie par le Board est appelée
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
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