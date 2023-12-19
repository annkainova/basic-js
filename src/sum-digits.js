const { NotImplementedError } = require("../extensions/index.js");

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
  let sum = n;

  while (new String(sum).length !== 1) {
    let newArray = new String(sum).split("");
    sum = 0;

    for (let number of newArray) {
      sum += Number(number);
    }
  }
  return sum;
}

module.exports = {
  getSumOfDigits,
};

console.log(getSumOfDigits(91));
