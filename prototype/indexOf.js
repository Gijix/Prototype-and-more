Array.prototype.myIndexOf = function (arg,index) {
    let num
    index ? num = index : num = 0
    index < 0 ? num += this.length : {}
    for(i = num; i < this.length; i++){
        if(this[i] === arg){
            return i
        }
    }
    return -1
};
