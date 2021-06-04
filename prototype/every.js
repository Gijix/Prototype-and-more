Array.prototype.myEvery = function (callback) {
  for (i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === false) {
      return false;
    }
  }
  return true;
};
module.exports = Array