Array.prototype.myConcat = function (...arg) {
  let tab = this;
  for (i = 0; i < arg.length; i++) {
    if (Array.isArray(arg[i])) {
      for (j = 0; j < arg[i].length; j++) {
        tab.push(arg[i][j]);
      }
    } else {
      tab.push(arg[i]);
    }
  }
  return tab;
};
module.exports = Array
