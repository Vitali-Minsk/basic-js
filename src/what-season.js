const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";

  for (let prop of Object.getOwnPropertyNames(Date.prototype)) {
    if (date[prop] !== Date.prototype[prop]) throw new Error("Unable to determine the time of year!");
  }

  switch (true) {
    case date.getMonth()<2 || date.getMonth()===11:
    return 'winter'
    break
    case date.getMonth()<5:
    return 'spring'
    break
    case date.getMonth()<8:
    return 'summer'
    break
    case date.getMonth()<11:
    return 'autumn (fall)'
    }
};
