Array.prototype.myIncludes = function (value, index) {
  let i = 0;
  let j = this.length;
  index ? (i = index) : {};
  index < 0 ? (i = j + index) : {};
  for (i; i < j; i++) {
    return this[i] === value ? true : {};
  }
  return false;
};
module.exports = Array
