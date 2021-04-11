/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  let item = '';
  for (let i = 0; i < domains.length; i++) {
    const arr = domains[i].split('.').reverse();

    for (let j = 0; j < arr.length; j++) {
      item = `${item}.${arr[j]}`;
      if (!Object.prototype.hasOwnProperty.call(res, item)) {
        res[item] = 1;
      } else {
        res[item] += 1;
      }
    }
    item = '';
  }

  return res;
}

module.exports = getDNSStats;
