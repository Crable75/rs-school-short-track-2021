/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  const set = new Set();
  const arrS1 = s1.split('');
  const arrS2 = s2.split('');
  for (let item of arrS1) {
    if (arrS2.includes(item)) set.add(item);
  }

  for (let item of set) {
    let counter1 = 0;
    let counter2 = 0;
    for (let i = 0; i < arrS1.length; i++) {
      if (item === arrS1[i]) counter1++;
    }
    for (let i = 0; i < arrS2.length; i++) {
      if (item === arrS2[i]) counter2++;
    }
    sum = counter1 < counter2 ? sum + counter1 : sum + counter2;
  }
  return sum;
}

module.exports = getCommonCharacterCount;
