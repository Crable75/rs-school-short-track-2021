/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  const arr = n.toString().split('');
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = parseInt(arr.filter((item, index) => {
      return index !== i;
    }).join(''), 10);
    if (currentNumber > maxNumber) maxNumber = currentNumber;
  }
  return maxNumber;
}

module.exports = deleteDigit;
