tab1 = [1, 3, 5, 0, 3, 2, 5, 6];
Array.prototype.myMap = function (callback) {
  let tab = [];
  for (let i = 0; i < this.length; i++) {
    tab.push(callback(this[i], i, this));
  }
  return tab;
};
module.exports = Array