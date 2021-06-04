Array.prototype.myToString = function () {
  let str = "";
  for (i = 0; i < this.length; i++) {
    i === this.length ? (str += this[i]) : (str += this[i] + ",");
  }
  return str;
};

module.exports = { Array };
