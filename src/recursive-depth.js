const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) return  1 + Math.max(...arr.map(e => this.calculateDepth(e.length===0? [1] : e)))
    else return 0
};
}