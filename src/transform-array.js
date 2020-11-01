const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("Error");
  const result = [];
  const controlSequences = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];

  for (let i = 0; i < arr.length; i++) {

    if (controlSequences.includes(arr[i])) continue;

    result.push(arr[i]);

    if (arr[i - 1] === "--discard-next") {
      result.pop();
      continue;
    }
    
    if (arr[i - 1] === "--double-next") result.push(arr[i]);

    if (arr[i + 1] === "--discard-prev") {
      result.pop();
      continue;
    }
    if (arr[i + 1] === "--double-prev") result.push(arr[i]);
  }

  return result;
};