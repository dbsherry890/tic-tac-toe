import Strike from "./Strike";
import Tile from "./Tile";

export default function Board({ tiles, onTileClick, playerTurn, strikeClass }) {
  return (
    <div className="board">
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(0)}
        value={tiles[0]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(1)}
        value={tiles[1]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(2)}
        value={tiles[2]}
        className="bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(3)}
        value={tiles[3]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(4)}
        value={tiles[4]}
        className="right-border bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(5)}
        value={tiles[5]}
        className=" bottom-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(6)}
        value={tiles[6]}
        className="right-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(7)}
        value={tiles[7]}
        className="right-border"
      />
      <Tile
        playerTurn={playerTurn}
        onClick={() => onTileClick(8)}
        value={tiles[8]}
      />
      <Strike strikeClass={strikeClass} />
    </div>
  );
}

//   function handleClick(i) {
//     if (squares[i] || calculateWinner(squares)) {
//       return;
//     }
//     const nextSquares = squares.slice(); // copy array
//     if (xIsNext) {
//       nextSquares[i] = "X";
//     } else {
//       nextSquares[i] = "O";
//     }
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   let status;
//   winner
//     ? (status = "Winner: " + winner)
//     : (status = "Next player: " + (xIsNext ? "X" : "O"));

//   const cols = [];
//   const rows = [];
//   for (let i = 0; i < 9; i += 3) {
//     for (let j = 0; j < 3; j++) {
//       rows.push(Square(i + j));
//     }
//     cols.push(
//       <div key={i} className="board-row">
//         {rows.slice(-3)}
//       </div>
//     );
//   }
//   return (
//     <div>
//       <div className="status">{status}</div>
//       {cols}
//     </div>
//   );
// }
//   const cols = [];
//   const rows = [];

//   for (let i = 0; i < 9; i += 3) {
//     for (let j = 0; j < 3; j++) {
//       rows.push(
//         <Square value={squares[i]} onSquareClick={() => handleClick(i)} />
//       );
//     }
//   }
//   return (
//     <>
//       <div className="status">{status}</div>
//       <div>{rows}</div>
//     </>
//   );
// }
