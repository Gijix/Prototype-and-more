tab1 = [1, 3, 5, 0, 3, 2, 5, 6];
Array.prototype.myFilter = function (callback) {
  let tab = [];
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i) ? tab.push(this[i]) : {};
  }
  return tab;
};
module.exports = Array
