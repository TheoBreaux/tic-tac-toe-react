import React from "react";
import "./Header.css";
import { GrPowerReset } from "react-icons/gr";

const Header = (props) => {
  
  const gameResetHandler = () => {console.log("HELP")};

  return (
    <header id="header">
      <div id="xo-icon">
        <span id="x">X</span>
        <span id="o">O</span>
      </div>
      <div id="turn-indicator-btn">{props.turn}</div>
      <div id="reset-btn" onClick={gameResetHandler}>
        <GrPowerReset />
      </div>
    </header>
  );
};

export default Header;
