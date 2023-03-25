import React from "react";
import "./Main.css";

const Main = (props) => {
  return (
    <main>
      <div className="row">
        <div onClick={props.tileClickHandler} className="game-tile">
          {props.printLetter}
        </div>
        <div onClick={props.tileClickHandler} className="game-tile">
          {props.printLetter}
        </div>
        <div onClick={props.tileClickHandler} className="game-tile">
          {props.printLetter}
        </div>
      </div>
      <div className="row">
        <div onClick={props.tileClickHandler} className="game-tile">
          {props.printLetter}
        </div>
        <div onClick={props.tileClickHandler} className="game-tile">
          {props.printLetter}
        </div>
        <div onClick={props.tileClickHandler} className="game-tile">
          {props.printLetter}
        </div>
      </div>
      <div className="row">
        <div onClick={props.tileClickHandler} className="game-tile">
          {props.printLetter}
        </div>
        <div onClick={props.tileClickHandler} className="game-tile">
          {props.printLetter}
        </div>
        <div onClick={props.tileClickHandler} className="game-tile">
          {props.printLetter}
        </div>
      </div>
    </main>
  );
};

export default Main;
