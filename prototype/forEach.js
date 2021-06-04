let tab1 = [1, 9, 5, 3, 6];
Array.prototype.myForEach = function (callback) {
  for (i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
module.exports = Array