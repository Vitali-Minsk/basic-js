const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position < 0) {
      this.chain= []
      throw new Error('Position is not number!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = '( ' + this.chain.map((e) => String(e)).join(' )~~( ') + ' )';
    this.chain= []
    return result;
  },
};

module.exports = chainMaker;
