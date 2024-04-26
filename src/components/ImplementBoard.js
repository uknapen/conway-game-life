import { numCols, numRows } from "../grid";
// Generate random Grid using hard coded value. TODO: get the value from input
export const generateRandomBoard = () => {
  const board = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      row.push(randomizeFav());
    }
    board.push(row);
  }
  return board;
};

// Generate Empty Grid using hard coded value. TODO: get the value from input
export const generateEmptyBoard = () => {
  const board = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      row.push(0);
    }
    board.push(row);
  }
  return board;
};

// Return either 1 or 0 but 3 times more 0 than 1
const randomizeFav = () => {
  if (Math.random() > 0.25) {
    return 0;
  } else return 1;
};
