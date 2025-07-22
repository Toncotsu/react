import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [log, setLog] = useState([]);
  const [winner, setWinner] = useState(null);
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleNameChange = (symbol, newName) => {
    setPlayers((prev) => ({
      ...prev,
      [symbol]: newName,
    }));
  };

  const handleSquareSelect = (row, col) => {
    if (gameBoard[row][col] || winner) return;

    const updated = gameBoard.map((r) => [...r]);
    updated[row][col] = currentPlayer;
    setGameBoard(updated);
    setLog((prev) => [
      ...prev,
      `${players[currentPlayer]} → (${row + 1}, ${col + 1})`,
    ]);

    const winnerSymbol = checkWinner(updated);
    if (winnerSymbol) {
      setWinner(winnerSymbol);
    } else {
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    }
  };

  function checkWinner(board) {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2])
        return board[i][0];
      if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i])
        return board[0][i];
    }
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2])
      return board[0][0];
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0])
      return board[0][2];
    return null;
  }

  const resetGame = () => {
    setWinner(null);
    setGameBoard(initialGameBoard);
    setCurrentPlayer("X");
    setLog([]);
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name={players.X}
            symbol="X"
            isActive={currentPlayer === "X"}
            onNameChange={handleNameChange}
          />
          <Player
            name={players.O}
            symbol="O"
            isActive={currentPlayer === "O"}
            onNameChange={handleNameChange}
          />
        </ol>

        <GameBoard gameBoard={gameBoard} onSquareSelect={handleSquareSelect} />
      </div>

      <Log logs={log} />

      {winner && (
        <div id="game-over">
          <h2>Game Over</h2>
          <p>{players[winner]} wins!</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </main>
  );
}

export default App;
