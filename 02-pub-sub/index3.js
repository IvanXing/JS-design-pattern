/*
** 取消监听需要传入引用，不能传入匿名函数，需要定义函数
** 解决办法： listen函数中直接返回函数，返回的函数是一个闭包，可以读取传入的key和fn
*/

const map = {};
const list = [];

function listen(key, fn) {
  if(!map[key]){
    map[key] = [];
  }
  map[key].push(fn);
  return function() {
    map[key] = map[key].filter(item => item !== fn)  // 避免传递引用 删除相同引用的函数
  }
}

function remove(key, fn) {
  var result = [];
  for (var i = 0; i < map[key].length; i++) {
    var currentFn = map[key][i]
    if (fn !== currentFn) {
      result.push(currentFn)
    }
  }
  map[key] = result;
}

function trigger(key, data) {
  map[key].forEach(item => item(data))
}

var unListen = listen(
  'event1',
  function() {console.log('this is listen 1')}
)

listen(
  'event2',
  function() {console.log('this is listen 2')}
)

trigger('event1')
unListen()
trigger('enent1')