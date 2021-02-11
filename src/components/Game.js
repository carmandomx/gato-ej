import React, { useEffect, useState } from "react";
import Board from "./Board";
import Title from "./Title";
import History from "./History";

function calculateWinner(board) {
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < winningPositions.length; index++) {
    const [a, b, c] = winningPositions[index]; // index = 1 a:3,b:4,c:5
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return null;
}

const Game = () => {
  const [history, setHistory] = useState([new Array(9).fill(null)]); // null, "X", "O"
  const [xIsNext, setXIsNext] = useState(true);
  const [board, setBoard] = useState(history[history.length - 1]);

  useEffect(() => {
    setBoard(history[history.length - 1]);
  }, [history]);

  const winner = calculateWinner(board);

  const handleSquareChange = (index) => {
    const copiedHistory = [...history];
    const copiedBoard = [...board];
    if (copiedBoard[index] || winner) return;

    copiedBoard[index] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setHistory([...copiedHistory, copiedBoard]);
  };

  const handleReset = () => {
    setHistory([new Array(9).fill(null)]);
    setXIsNext(true);
  };

  const handleChangeBoard = (board) => {
    setBoard(board);
  };

  return (
    <>
      <div>
        <Title winner={winner} turn={xIsNext ? "O" : "X"} />
        <Board squares={board} handleClick={handleSquareChange} />
        <button onClick={handleReset}>Play Again</button>
      </div>
      <div>
        <History moves={history} handleTimeTravel={handleChangeBoard} />
      </div>
    </>
  );
};

export default Game;
