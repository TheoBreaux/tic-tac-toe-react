import React, { useState } from "react";
import "./GameTile.css";

const GameTile = (props) => {
  const [tileLetter, setTileLetter] = useState("");

  const tileSelectHandler = () => {
    //if the turn is equal to X
    if (props.turn === "X") {
      setTileLetter("X");
      props.setTurn("O");
    } else {
      setTileLetter("O");
      props.setTurn("X");
    }
  };

  return (
    <div onClick={tileSelectHandler} className="game-tile">
      {tileLetter}
    </div>
  );
};

export default GameTile;
