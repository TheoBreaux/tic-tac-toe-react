import React from "react";
import "./Header.css";
import { GrPowerReset } from "react-icons/gr";

const Header = (props) => {

  return (
    <header id="header">
      <div id="xo-icon">
        <span id="x">X</span>
        <span id="o">O</span>
      </div>
      <button onClick={props.turnClickHandler}id="turn-indicator-btn">{props.turn}</button>
      <div id="reset-btn">
        <GrPowerReset />
      </div>
    </header>
  );
};

export default Header;
