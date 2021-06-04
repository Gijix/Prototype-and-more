Array.prototype.myJoin = function (arg) {
  let str = "";
  console.log(arg)
  for (i = 0; i < this.length; i++) {
    if (arg !== undefined) {
      str += this[i]+arg
      console.log(str);
    } else {
      if (i === this.length - 1) {
        str += this[i];
        console.log(str);
      } else {
        str += this[i] + ",";
        console.log(str);
      }
    }
  }
  return str;
};
module.exports = Array