/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const mtrx = matrix;
  for (let i = 0; i < mtrx.length; i++) {
    mtrx[i] = mtrx[i].map((item) => (item === true ? item : 0));
  }

  for (let i = 0; i < mtrx.length; i++) {
    for (let j = 0; j < mtrx[i].length; j++) {
      if (mtrx[i][j] === true) {
        if (mtrx[i - 1] !== undefined && mtrx[i - 1][j] !== true) {
          mtrx[i - 1][j] = mtrx[i - 1][j] + 1;
        }
        if (mtrx[i + 1] !== undefined && mtrx[i + 1][j] !== true) {
          mtrx[i + 1][j] = mtrx[i + 1][j] + 1;
        }
        if (mtrx[i][j - 1] !== undefined && mtrx[i][j - 1] !== true) {
          mtrx[i][j - 1] = mtrx[i][j - 1] + 1;
        }
        if (mtrx[i][j + 1] !== undefined && mtrx[i][j + 1] !== true) {
          mtrx[i][j + 1] = mtrx[i][j + 1] + 1;
        }
        if (mtrx[i - 1] !== undefined && mtrx[i][j - 1] !== undefined
          && mtrx[i - 1][j - 1] !== true) {
          mtrx[i - 1][j - 1] = mtrx[i - 1][j - 1] + 1;
        }
        if (mtrx[i + 1] !== undefined && mtrx[i][j + 1] !== undefined
          && mtrx[i + 1][j + 1] !== true) {
          mtrx[i + 1][j + 1] = mtrx[i + 1][j + 1] + 1;
        }
        if (mtrx[i - 1] !== undefined && mtrx[i][j + 1] !== undefined
          && mtrx[i - 1][j + 1] !== true) {
          mtrx[i - 1][j + 1] = mtrx[i - 1][j + 1] + 1;
        }
        if (mtrx[i + 1] !== undefined && mtrx[i][j - 1] !== undefined
          && mtrx[i + 1][j - 1] !== true) {
          mtrx[i + 1][j - 1] = mtrx[i + 1][j - 1] + 1;
        }
      }
    }
  }
  for (let i = 0; i < mtrx.length; i++) {
    mtrx[i] = mtrx[i].map((item) => (item === true ? 1 : item));
  }
  return mtrx;
}

module.exports = minesweeper;
