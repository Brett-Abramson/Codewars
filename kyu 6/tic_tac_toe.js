// Implement a Tic-Tac-Toe (AKA: Noughts and crosses, Xs and Os) solver. The input to the solver function will be an array of length 9 representing the board. Output of the function will be the index of the desired move (0-8). You will always be X. You must make a valid move, and a winning move if available.

// The board is represented as an array with the following indexes:

//  0 | 1 | 2
// ---+---+---
//  3 | 4 | 5
// ---+---+---
//  6 | 7 | 8
// For example, the following board would be represented as

// solveTTT(['', '', '', 'O', '', '', 'X', '', ''])

//    |   |
// ---+---+---
//  O |   |
// ---+---+---
//  X |   |
// Valid outputs for the above input would be 0, 1, 2, 4, 5, 7 or 8.

// The following board would only have 1 correct output (2) because it is the only move that connects 3 X's in a row:

// solveTTT(['O', '', '', 'O', 'X', '', 'X', 'O', 'X'])

// const solveTTT = (board) => {
// if()
//  }

// if winning move is available take it
// 3 in a rows
// 0, 1, 2
// 3, 4, 5
// 6, 7, 8

// 0, 3, 6
// 1, 4, 7
// 2, 5, 8

// 0, 4, 8
// 2, 4, 6

const board = ['', '', 'O', 'O', '', '', 'X', '', '']
//  determines if there space is open
const openSquare = (space) => space === "";
const xSquare = (space) => space === "X";
const oSquare = (space) => space === "O";


// Returns the starting square of first row without o's
const checkRow = (board, function_name) => {
  for (let i = 0; i < board.length; i += 3) {
    if (
      !function_name(board[i]) &&
      !function_name(board[i + 1]) &&
      !function_name(board[i + 2])
    ) {
      return i;
    }
  }
  // all rows contain an o
  return false;
};
// Returns the starting square of first column without o's
const checkColumn = (board, function_name) => {
  for (let i = 0; i < 3; i++) {
    if (
      !function_name(board[i]) &&
      !function_name(board[i + 3]) &&
      !function_name(board[i + 3])
    ) {
      return i;
    }
  }
  // all columns contain an o
  return false;
};

const checkDiagonal = (board, function_name) => {
  if(!function_name(board[4])){
    if(function_name(board[0] && function_name(board[8]))) return 0
    else if (function_name(board[2] && function_name(board[6]))) return 2
  }
  // all columns contain an o
  return false;
};

console.log(checkDiagonal(board, xSquare))





// find where o's are placed
// winning moves are the rows columns or diagonals without any o's
// check if row has o then check if


// STEPS
// check if winning move
  // search for 2 x's and open space
  // diagonally
  // columns
  // rows
// check if diagonal play
  // without o's
  // already has an x
// check if corners are open
  // if a corner is open check there corresponding corners ( if(0) check (2) && (6))