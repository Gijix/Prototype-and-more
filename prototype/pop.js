Array.prototype.myPop = function (){
    let x = this[this.length-1]
    this.length -= 1
    return x
}
module.exports  = Array

