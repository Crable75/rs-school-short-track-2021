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
function findIndex(arr, value) {
  let inSearch = 0;
  let outSearch = arr.length - 1;
  while (inSearch <= outSearch) {
    let middle = Math.floor((inSearch + outSearch) / 2);
    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] < value) {
      inSearch = middle + 1;
    } else {
      outSearch = middle - 1;
    }
  }
  return -1;
}

module.exports = findIndex;
