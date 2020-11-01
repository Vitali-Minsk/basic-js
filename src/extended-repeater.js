const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let addon = []
  
  let arr = Array(options.repeatTimes).fill(str)
  addon = Array(options.additionRepeatTimes).fill(options.addition).map(function(e) {return e===null? String(e):e}).join(options.additionSeparator);
  let a = arr.map((e) => e+=addon)
  if (options.separator===undefined) return a.join('+')
  return (a.join(options.separator))


}