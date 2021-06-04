Object.defineProperty(Object.prototype, "logProp", {
  enumerable: true,
  get: function () {
    return console.log(Object.getOwnPropertyNames(this));
  },
});
Object.prototype.logPropDes = function(property){
  console.log(Object.getOwnPropertyDescriptor(this,property));
}
Object.defineProperty(Object.prototype, "log", {
  enumerable: true,
  get: function () {
     console.log(this);
  },
});
Object.prototype.setProperty = function (propertyName, property) {
  Object.defineProperty(this, propertyName, property);
};
module.exports = Object;
