import { numCols, numRows } from "../grid";

const coordRelative = [
  [0, 1],
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];
//   Return the number of alive neighboor from a given cell position
const countAliveVoisins = (board, i, j) => {
  let aliveVoisins = 0;
  coordRelative.forEach(([x, y]) => {
    let voisinCoordX = i + x;
    let voisinCoordY = j + y;
    if (voisinCoordX === -1) {
      voisinCoordX = numRows - 1;
    }
    if (voisinCoordX === numRows) {
      voisinCoordX = 0;
    }
    if (voisinCoordY === -1) {
      voisinCoordY = numCols - 1;
    }
    if (voisinCoordY === numCols) {
      voisinCoordY = 0;
    }

    aliveVoisins += board[voisinCoordX][voisinCoordY];
  });
  return aliveVoisins;
};

//   return a new board and fill it with the current one
const createNextBoard = (board) => {
  const nextBoard = [];
  for (let i = 0; i < numRows; i++) {
    nextBoard.push([...board[i]]);
  }
  return nextBoard;
};

//   go through all cell from a new board and update the cell
export const updateBoard = (board) => {
  const nextBoard = createNextBoard(board);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      const aliveVoisins = countAliveVoisins(board, i, j);

      if (aliveVoisins < 2 || aliveVoisins > 3) {
        nextBoard[i][j] = 0;
      } else if (board[i][j] === 0 && aliveVoisins === 3) {
        nextBoard[i][j] = 1;
      }
    }
  }

  return nextBoard;
};
