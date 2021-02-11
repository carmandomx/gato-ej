import React from "react";
import Square from "./Square";
import "./board.css";
const Board = ({ squares, handleClick }) => {
  const handler = (i) => {
    handleClick(i);
  };

  const tiles = squares.map((value, index) => (
    <Square
      key={index}
      value={value}
      index={index}
      handleClickOnSquare={handler}
    />
  ));

  return <div className="Board">{tiles}</div>;
};

export default Board;
