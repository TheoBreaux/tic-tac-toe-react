import React from "react";
import "./GameBoard.css";
import GameTile from "./GameTile";

const GameBoard = (props) => {
  return (
    <main>
      <div className="row">
        <GameTile turn={props.turn} setTurn={props.setTurn} />
        <GameTile turn={props.turn} setTurn={props.setTurn} />
        <GameTile turn={props.turn} setTurn={props.setTurn} />
      </div>
      <div className="row">
        <GameTile turn={props.turn} setTurn={props.setTurn} />
        <GameTile turn={props.turn} setTurn={props.setTurn} />
        <GameTile turn={props.turn} setTurn={props.setTurn} />
      </div>
      <div className="row">
        <GameTile turn={props.turn} setTurn={props.setTurn} />
        <GameTile turn={props.turn} setTurn={props.setTurn} />
        <GameTile turn={props.turn} setTurn={props.setTurn} />
      </div>
    </main>
  );
};

export default GameBoard;
