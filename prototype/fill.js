Array.prototype.myFill = function (elem,start,end) {
    if(start && end){
        start < 0 ? start += this.length:{}
        end   < 0 ? end += this.length:{}
        for(i = start;i < end ; i++){
            this[i] = elem
        }
    }
    else if (start){
        start < 0 ? start += this.length:{}
        for(i = start;  i < this.length;i++){
            this[i] = elem
        }
    }
    else{
        for(i = 0; i < this.length; i++){
            this[i] = elem
        }
    }
    return this
}
module.exports = Array