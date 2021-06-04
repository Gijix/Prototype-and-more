Array.prototype.myReduce = function (callback, start) {
  let index;
  let total = null
  start ? (index = start) : (index = 0);
  for (i = index; i < this.length; i++) {
    total = callback(total, this[i], i, this);
  }
  return total;
};
module.exports = Array;

Array.reduce((a,b) => a === b)
