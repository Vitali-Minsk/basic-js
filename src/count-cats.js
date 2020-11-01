const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (matrix.length===0) return 0
  return matrix.reduce((acc, val) => acc.concat(val)).filter(e=>e==='^^').length
};
