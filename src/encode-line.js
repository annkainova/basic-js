const { NotImplementedError } = require("../extensions/index.js");

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
  const chars = str.split("");
  console.log();
  let result = "";
  let count = 1;

  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] === chars[i + 1]) {
      count += 1;
    } else {
      result += count > 1 ? count + chars[i] : chars[i];
      count = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine,
};

console.log(encodeLine("abbccd"));
