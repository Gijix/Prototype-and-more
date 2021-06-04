//Array.prototype.myPush = function (...x) {
//   for (i = 0; i < x.length; i++) {
//     this[this.length] = x[i];
//   }
//   return this.length;
// };
Object.defineProperty(Array.prototype, 'myPush',{
  value: function (...x) {
    for (i = 0; i < x.length; i++) {
      this[this.length] = x[i];
    }
    return this.length;
  }
})
module.exports = Array