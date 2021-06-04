Array.prototype.myShift = function () {
  let tab = this;
  let x = this[0];
  for (i = 0; i < this.length; i++) {
    this[i] = tab[i + 1];
  }
  this.length -= 1;
  return x;
};
module.exports = Array

