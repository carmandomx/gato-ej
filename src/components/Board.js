import React from "react";
import Square from "./Square";
import "./board.css";
const Board = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div className="Board">
      <div className="Row">
        <Square value={0} handleOnClick={handleClick} />
        <Square value={1} handleOnClick={handleClick} />
        <Square value={2} handleOnClick={handleClick} />
      </div>
      <div className="Row">
        <Square value={3} handleOnClick={handleClick} />
        <Square value={4} handleOnClick={handleClick} />
        <Square value={5} handleOnClick={handleClick} />
      </div>
      <div className="Row">
        <Square value={6} handleOnClick={handleClick} />
        <Square value={7} handleOnClick={handleClick} />
        <Square value={8} handleOnClick={handleClick} />
      </div>
    </div>
  );
};

export default Board;
