Array.prototype.myUnshift = function (...x) {
  let size = x.length;
  this.length += size;
  for(j = 1; j <= this.length - size; j++){
    this[this.length - j ] = this[this.length - j - size ]
  }
  for (i = 0; i < size; i++) {
    this[i] = x[i];
  }
  return this.length;
};
module.exports = Array;
