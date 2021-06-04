Array.prototype.mySome = function (callback) {
  for (i = 0; i < this.length; i++) {
    if (callback(this[i], i) === true) {
      return true;
    }
  }
  return false;
};
module.exports = Array;
