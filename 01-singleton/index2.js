// var user = (function() {
//   var name = 'user';
//   return {
//     getName: function() {
//       console.log(name);
//       return name;
//     }
//   }
// })();  //立即执行，返回一个对象

// console.log(user.getName())

// 使用闭包包裹  优雅的设计标志位
// 闭包外部无法修改，前一种外部可以修改标志位

/*
** __instance不暴露出去对这个闭包修改的话，单例模式里的缓存是永远不会被改变的
*/
var ProxySingleton = (function() {
  var __instance = null;
  return function(Func) {
    if(!__instance) {
      __instance = new Func();
    } 
    return __instance;
  }
})(); 

function A() {
  this.name = Math.random();
}

var a = new ProxySingleton(A);
var b = new ProxySingleton(A);
console.log(a, b, a === b)


