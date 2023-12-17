const { NotImplementedError } = require("../extensions/index.js");

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
  const numbers = String(n);
  console.log(numbers);
  let updateNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    let newNumber = numbers.substring(0, i) + numbers.substring(i + 1);
    updateNumbers.push(newNumber);
  }
  console.log(updateNumbers);

  return Math.max(...updateNumbers);
}

module.exports = {
  deleteDigit,
};

console.log(deleteDigit(152));
