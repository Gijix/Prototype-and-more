Array.prototype.myReverse = function () {
  let arr = this.map((e) => e);
  this.forEach((e, i) => (this[i] = arr[arr.length - i - 1]));
  console.log(this);
  return this;
};
module.exports = { Array };
