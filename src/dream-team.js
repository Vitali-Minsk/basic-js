const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  let a = members.filter(e=>e===String(e))
  let b = a.map(e=>e.replace(/\s+/g,''))
  return String(b.reduce((acc, curr)=>{return acc + curr[0]},'')).toUpperCase().split('').sort().join('')
};