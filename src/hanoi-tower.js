const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
 // throw new CustomError('Not implemented');
 const turns = 2 ** disksNumber - 1;
 //turnSpeed = turns / hour
 //hour = turn / turnSpeed
 const seconds = Math.floor(turns/turnsSpeed*3600);
  return { turns , seconds }
};
