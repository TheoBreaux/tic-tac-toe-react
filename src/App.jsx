import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";

const App = () => {
  const [turn, setTurn] = useState("X");

  return (
    <div className="App">
      <Header turn={turn} />
      <GameBoard turn={turn} setTurn={setTurn} />
      <Footer />
    </div>
  );
};

export default App;
