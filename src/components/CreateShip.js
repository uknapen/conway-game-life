export const CreateGlider = (newBoard, i, j) => {
  newBoard[i - 1][j - 1] = 0;
  newBoard[i - 1][j] = 1;
  newBoard[i - 1][j + 1] = 0;
  newBoard[i][j - 1] = 0;
  newBoard[i][j] = 0;
  newBoard[i][j + 1] = 1;
  newBoard[i + 1][j - 1] = 1;
  newBoard[i + 1][j] = 1;
  newBoard[i + 1][j + 1] = 1;
};

export const CreateLWSS = (newBoard, i, j) => {
  newBoard[i - 1][j - 1] = 0;
  newBoard[i - 1][j] = 1;
  newBoard[i - 1][j + 1] = 1;
  newBoard[i][j - 1] = 1;
  newBoard[i][j] = 0;
  newBoard[i][j + 1] = 1;
  newBoard[i + 1][j - 1] = 1;
  newBoard[i + 1][j] = 1;
  newBoard[i + 1][j + 1] = 1;
  newBoard[i][j + 2] = 1;
  newBoard[i + 2][j - 1] = 1;
  newBoard[i + 2][j] = 1;
  newBoard[i][j - 2] = 1;
  newBoard[i + 1][j - 2] = 1;
};

export const CreateMWSS = (newBoard, i, j) => {
  CreateLWSS(newBoard, i, j);

  newBoard[i + 2][j - 2] = 1;
  newBoard[i + 1][j - 3] = 1;
  newBoard[i][j - 3] = 1;
};
export const CreateHWSS = (newBoard, i, j) => {
  CreateMWSS(newBoard, i, j);

  newBoard[i + 2][j - 3] = 1;
  newBoard[i][j - 4] = 1;
  newBoard[i + 1][j - 4] = 1;
};
