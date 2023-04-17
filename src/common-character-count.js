const { NotImplementedError } = require('../extensions/index.js');

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
  let sortStr = s1.split('').sort((a, b) => a < b ? 1 : -1).reverse().join('');
  let sortStr2 = s2.split('').sort((a, b) => a < b ? 1 : -1).reverse().join('');
  let max;
  let min;
  if (sortStr.length > sortStr2.length) {
    max = sortStr;
    min = sortStr2;
  }
  else {
    max = sortStr2;
    min = sortStr;
  };
  let count = 0;
  for (let i = 0; i < max.length; i++) {
    if (max.includes(min[i])) {
      max = max.slice(i)
      count += 1;
    }
  }
  return count;
}
module.exports = {
  getCommonCharacterCount
};
