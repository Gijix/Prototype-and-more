Array.prototype.myFindIndex = function (callback) {
  for (i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      return i;
    }
  }
  return -1;
};
module.exports = Array