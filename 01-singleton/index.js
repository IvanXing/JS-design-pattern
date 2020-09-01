/*
** ES5写法
*/

var Singleton = function(name) {
  this.name = name;
  this.instance = null;  // 标志位，缓存
}

Singleton.prototype.getName = function() {
  console.log(this.name);
}

Singleton.getInstance = function(name) {
  // console.log('xxx', this.instance)
  if(!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
}

var a = Singleton.getInstance('a')
var b = Singleton.getInstance('b')
console.log(a, b, a=== b)
console.log(a.getName(), b.getName())