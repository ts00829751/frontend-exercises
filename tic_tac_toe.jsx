const { useState } = React;

export function Board() {
  const [toggle, setToggle] = useState(false);
  const player = toggle ? "O" : "X";
  const [squares, setSquares] = useState(Array(9).fill(null));

  const isWinning = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = isWinning(squares);
  const isDraw = !winner && squares.every(square => square !== null);

  const handleSquare = (i) => {
    if (squares[i] || winner) return;
    const inputMark = [...squares];
    inputMark[i] = player;
    setSquares(inputMark);
    setToggle(!toggle);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setToggle(false);
  };

  return (
    <div id="tic-tac-toe">
      <h1>Tic-Tac-Toe</h1>
      <h3 id="game-msg">
        {winner ? `Winner: ${winner}` : isDraw ? `It's a Draw!` : `Next Player: ${player}`
        }
      </h3>
      <div id="nine-square-grid">
        {squares.map((value, i) => (
          <button
            key={i}
            className="square"
            type="button"
            disabled={squares[i]}
            onClick={() => handleSquare(i)}
          >
            {value}
          </button>))}
      </div>
      <button
        id="reset"
        type="button"
        onClick={handleReset}
      >
        Reset Game
      </button>
    </div>
  );
}
