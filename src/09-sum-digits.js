/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  while (n > 9) {
    let arr = n.toString().split('');
    arr.forEach((item) => sum += parseInt(item, 10));
    n = sum;
    sum = 0;
  }
  return n;
}

module.exports = getSumOfDigits;
