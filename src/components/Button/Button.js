import React from "react";
function Button(props) {
  function check(board) {
    for (var i = 0; i < board.length; i++) {
      // Checking Horizontally and Vertically
      var duplicateX = new Array(10);
      var duplicateY = new Array(10);
      for (var j = 0; j < board[i].length; j++) {
        // Checking Horizontally
        if (duplicateX.includes(board[i][j])) {
          return false;
        } else {
          duplicateX[board[i][j]] = board[i][j];
        }

        // Checking Vertically
        if (duplicateY.includes(board[j][i])) {
          return false;
        } else {
          duplicateY[board[j][i]] = board[j][i];
        }
      }
    }
    for (var block = 0; block < 9; block++) {
      var duplicate = new Array(10);
      for (
        var i = Math.floor(block / 3) * 3;
        i < Math.floor(block / 3) * 3 + 3;
        i++
      ) {
        for (var j = (block % 3) * 3; j < (block % 3) * 3 + 3; j++) {
          if (duplicate.includes(board[i][j])) {
            return false;
          } else {
            duplicate[board[i][j]] = board[i][j];
          }
        }
      }
    }
    for (var i = 0; i < board.length; i++) {
      if (board[i].includes(0)) return false;
    }

    return true;
  }
  function solve(board) {
    for (var cell = 0; cell < 81; cell++) {
      var i = Math.floor(cell / 9);
      var j = cell % 9;
      if (board[i][j] == 0) {
        for (var value = 1; value < 10; value++) {
          if (!board[i].includes(value)) {
            if (!checkCol(board, j, value)) {
              var block = whichBlock(
                board,
                Math.floor(i / 3) * 3 + Math.floor(j / 3)
              );
              if (
                !block[0].includes(value) &&
                !block[1].includes(value) &&
                !block[2].includes(value)
              ) {
                board[i][j] = value;

                if (check(board)) {
                  return true;
                }
                if (solve(board)) {
                  return true;
                }
              }
            }
          }
        }

        board[i][j] = 0;
        return false;
      }
    }
  }
  function checkCol(board, col, value) {
    for (var i = 0; i < 9; i++) {
      if (board[i][col] == value) {
        return true;
      }
    }
    return false;
  }
  function whichBlock(board, blockNumber) {
    var block = [[], [], []];
    for (
      var i = Math.floor(blockNumber / 3) * 3;
      i < Math.floor(blockNumber / 3) * 3 + 3;
      i++
    ) {
      for (var j = (blockNumber % 3) * 3; j < (blockNumber % 3) * 3 + 3; j++) {
        if (i < 3) {
          if (j < 3) block[i][j] = board[i][j];
          else if (j < 6) block[i][j - 3] = board[i][j];
          else block[i][j - 6] = board[i][j];
        } else if (i < 6) {
          if (j < 3) block[i - 3][j] = board[i][j];
          else if (j < 6) block[i - 3][j - 3] = board[i][j];
          else block[i - 3][j - 6] = board[i][j];
        } else {
          if (j < 3) block[i - 6][j] = board[i][j];
          else if (j < 6) block[i - 6][j - 3] = board[i][j];
          else block[i - 6][j - 6] = board[i][j];
        }
      }
    }
    return block;
  }
  let current = props.boardState;
  function submitHandler(event) {
    event.preventDefault();
    if (solve(current)) {
      props.onSolve(current);
    }
  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <button type="submit">Solve</button>
      </form>
    </div>
  );
}
export default Button;
