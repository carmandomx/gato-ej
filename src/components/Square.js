import React from "react";
import "./square.css";
const Square = ({ value, handleOnClick }) => {
  return (
    <button className="Square" onClick={handleOnClick}>
      {value}
    </button>
  );
};

export default Square;
