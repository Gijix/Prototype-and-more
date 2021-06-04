Array.myIsArray = function (arg) {
  return Object.prototype.toString.call(arg) === "[object Array]";
};
module.exports = Array;
