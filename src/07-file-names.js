/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = names;
  for (let i = 0; i < res.length; i++) {
    let idx = 0;
    // eslint-disable-next-line no-loop-func
    res = res.map((item, index) => {
      if (index > i && item === res[i]) {
        idx++;
        return `${item}(${idx})`;
      }
      return item;
    });
  }
  return res;
}

module.exports = renameFiles;
