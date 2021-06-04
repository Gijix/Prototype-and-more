Array.prototype.myFind = function (callback) {
  for (i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      return this[i];
    }
  }
  return undefined;
};
module.exports = Array