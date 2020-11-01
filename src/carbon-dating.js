const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (isNaN(sampleActivity)) return false
  if (isFinite(sampleActivity)) return false
  return (15/sampleActivity)/(0.693/5730)
};
