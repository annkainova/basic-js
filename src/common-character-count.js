const { NotImplementedError } = require("../extensions/index.js");

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
  let sentense = s1;
  const symbols = s2.split("");
  let result = 0;

  for (let symbol of symbols) {
    if (sentense.includes(symbol)) {
      result += 1;

      const indexSymbol = sentense.indexOf(symbol);
      const nextIndex = indexSymbol + 1;
      sentense =
        sentense.substring(0, indexSymbol) + sentense.substring(nextIndex);
      console.log(sentense);
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount,
};

console.log(getCommonCharacterCount("aabcc", "adcaa"));
