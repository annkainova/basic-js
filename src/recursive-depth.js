const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    let mathDepth = 1;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        console.log(item);
        const depth = this.calculateDepth(item) + 1;
        console.log(depth);

        if (depth > mathDepth) {
          mathDepth = depth;
        }
        console.log(mathDepth);
      }
    });
    return mathDepth;
  }
}
const depthCalc = new DepthCalculator();
module.exports = {
  DepthCalculator,
};

console.log(depthCalc.calculateDepth([1, 2, 3, [4, [5]]]));
