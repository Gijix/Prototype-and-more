// return the most frequent value

Array.prototype.most = function () {
  let count = 1;
  let value;
  for (i = 0; i < this.length; i++) {
    let num = 1;
    for (j = i; j < this.length; j++) {
      if (this[i] === this[j]) {
        num += 1;
      }
    }
    if (num > count) {
      count = num;
      value = this[i];
    }
  }
  if (count > 1){
  return value
  }
  else{
    return undefined
  }
};

// return random array elemnent

Array.prototype.random = function () {
  return  this[Math.floor(Math.random()*this.length)]
}


// randome array element order
Array.prototype.shuffle = function () {
  let tab = this.slice();
  for (let i = 0; i < this.length; i++) {
    this[i] = tab.splice(Math.floor(Math.random() * tab.length), 1)[0];
  }
  return this;
}
module.exports = { Array };
