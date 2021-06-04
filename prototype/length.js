Object.defineProperty(Array.prototype, "myLength", {
  get: function () {
    let size = 0
    while (this[size] !== undefined ) {
      size++;
    }
    return size;
  },
});
module.exports = Array;
//  work in progress