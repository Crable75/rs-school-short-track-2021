/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  let res = '';
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      res = `${res}${count}${str[i - 1]}`;
      count = 1;
    }
    if (i === str.length - 1) {
      res = `${res}${count}${str[i]}`;
    }
  }
  return res.replace(/1/g, '');
}

module.exports = encodeLine;
