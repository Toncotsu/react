export default function GameBoard({ gameBoard, onSquareSelect }) {
  return (
    <ol id="game-board">
      {gameBoard.map((row, ridx) => (
        <li key={ridx}>
          <ol>
            {row.map((symbol, cidx) => (
              <li key={cidx}>
                <button onClick={() => onSquareSelect(ridx, cidx)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
