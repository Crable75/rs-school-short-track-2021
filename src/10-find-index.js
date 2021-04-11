/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let inSearch = 0;
  let outSearch = array.length - 1;
  while (inSearch <= outSearch) {
    const middle = Math.floor((inSearch + outSearch) / 2);
    if (array[middle] === value) {
      return middle;
    } if (array[middle] < value) {
      inSearch = middle + 1;
    } else {
      outSearch = middle - 1;
    }
  }
  return -1;
}

module.exports = findIndex;
