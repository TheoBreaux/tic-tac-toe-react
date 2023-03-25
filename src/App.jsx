import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [turn, setTurn] = useState("X");
  let [printLetter, setPrintLetter] = useState("");

  const turnClickHandler = () => {
    if (turn === "X") {
      setTurn("O");
    } else {
      setTurn("X");
    }
  };

  const tileClickHandler = () => {
    if (turn === "X") {
      setPrintLetter("X");
    } else {
      setPrintLetter("O");
    }
  };

  return (
    <div className="App">
      <Header turnClickHandler={turnClickHandler} turn={turn} />
      <Main tileClickHandler={tileClickHandler} printLetter={printLetter} />
      <Footer />
    </div>
  );
};

export default App;
