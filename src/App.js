import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import Button from "./components/Button/Button";

function App() {
  const DUMMY_BOARD = [
    [0, 0, 8, 4, 0, 3, 5, 0, 6],
    [0, 0, 3, 1, 0, 2, 0, 0, 4],
    [0, 4, 5, 7, 0, 0, 0, 9, 0],
    [6, 9, 0, 0, 0, 5, 0, 0, 7],
    [0, 8, 0, 0, 0, 0, 0, 5, 0],
    [4, 0, 0, 3, 0, 0, 0, 1, 8],
    [0, 7, 0, 0, 0, 6, 2, 4, 0],
    [1, 0, 0, 5, 0, 7, 8, 0, 0],
    [8, 0, 6, 9, 0, 1, 3, 0, 0],
  ];
  return (
    <div className="App">
      <Board boardState={DUMMY_BOARD} />
      
    </div>
  );
}

export default App;
