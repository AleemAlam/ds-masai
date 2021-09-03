function nQueens(board, row, n) {
  if (row == n) {
    print(board);
    return true;
  }
  for (let i = 0; i < n; i++) {
    if (isSafe(board, row, i)) {
      board[row][i] = 1;
      if (nQueens(board, row + 1, n)) {
        return true;
      }
      board[row][i] = 0;
    }
  }
  return false;
}

function print(board) {
  for (let i = 0; i < board[0].length; i++) {
    const row = [];
    for (let j = 0; j < board[0].length; j++) {
      row.push(board[i][j]);
    }
    console.log(row.join(" "));
  }
}
const isSafe = (board, row, col) => {
  const n = board[0].length;
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 1) return false;
  }
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 1) return false;
  }
  for (let i = row - 1, j = col + 1; i >= 0 && j <= n - 1; i--, j++) {
    if (board[i][j] === 1) return false;
  }
  return true;
};

const board = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];
console.log(nQueens(board, 0, board[0].length));
