import React, { useState } from "react";
import Cells from "./Cells";
import "./Board.css";
import Button from "../Button/Button";
function Board(props) {
  let counter = -1;
  const [board, setBoard] = useState(props.boardState);
  const [isSolved, setIsSolved] = useState(false);
  function solveBoardHandler(newBoard) {
    setBoard(newBoard);
    solved();
  }
  function solved() {
    setIsSolved(true);
  }
  function unsolved(){
    setIsSolved(false);
  }
  function changeBoard(newNumber,cellId){
    let copyBoard = board;
    let row = Math.floor(cellId/9);
    let col = cellId%9;

    
    copyBoard[row][col] = parseInt(newNumber);
    setBoard(copyBoard);

    unsolved();


  }
  return (
    <div className="outer-grid">
      <div className="grid">
        {!isSolved &&
          board.map((rows) => {
            return rows.map((nums) => {
              counter++;
              return <Cells id={counter.toString()} number={nums} onNewBoard={changeBoard}></Cells>;
            });
          })}
        {isSolved &&
          board.map((rows) => {
            return rows.map((nums) => {
              counter++;
              return <Cells id={counter.toString()} number={nums} onNewBoard={changeBoard}></Cells>;
            });
          })}
      </div>
      <Button boardState={board} onSolve={solveBoardHandler}></Button>
    </div>
  );
}

export default Board;
