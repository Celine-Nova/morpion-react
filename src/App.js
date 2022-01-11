// import logo from './logo.svg';
import './App.css';
import Square from './Square';
import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
export default class Board extends React.Component{
  // Pour récupérer les données d’enfants multiples, ou pour permettre à deux composants enfants de communiquer entre eux, il vous faut plutôt déclarer leur état partagé dans le composant parent. Ce composant parent peut alors leur repasser cet état au travers des props ; ainsi, les composants enfants sont synchronisés entre eux et avec le composant parent.
  constructor(props) {
    super(props);
    // this.state est considéré comme une donnée privée du composant React qui le définit. Stockons donc la valeur courante du Board dans this.state
    // je definis l'état initial un tableau de 9 cases vides. 
    this.state = {
      squares: Array(9).fill(null),
      // Chaque fois qu’un joueur interviendra, xIsNext (un booléen) sera basculé afin de déterminer à qui appartiendra le prochain tour, et l’état du jeu sera sauvegardé. Mettons à jour la fonction handleClick de Board pour basculer la valeur de xIsNext :
      xIsNext: true,
    };
  }
  // je definie la function handleClick
  // La méthode slice() renvoie un objet tableau, contenant une copie superficielle. Le tableau original ne sera pas modifié.
  handleClick(i) {
    const squares = this.state.squares.slice();
  
    //  Si quelqu'un a déjà gagné ou si la case est déja remplie
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // condition opérateur ternaire
    squares[i] =  this.state.xIsNext ? 'X' : 'O';
  
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  renderSquare(i) {
        return <Square
      // je renvoie l'etat du tableau à mon composant enfant Square
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
        />;
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status =  `Joueur  ${winner} a gagné`
    } else {
      status = 'Prochain joueur : ' + (this.state.xIsNext ? 'joueur 1 X' : 'joueur 2 O');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  } 
}
// Partie gagnée ou Null
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  } 
