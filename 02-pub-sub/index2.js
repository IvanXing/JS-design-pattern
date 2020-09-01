const map = {};
const list = [];

function listen(key, fn) {
  if(!map[key]){
    map[key] = [];
  }
  map[key].push(fn);
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

function event1Cb() {
  console.log('this is listen3')
}

listen(
  'event1',
  event1Cb
)

listen(
  'event1',
  function() {console.log('this is listen 1')}
)

listen(
  'event2',
  function() {console.log('this is listen 2')}
)

trigger('event1')
trigger('event2')
remove('event1', event1Cb)  // 取消监听
trigger('enent1')

/*
** 情况1
*/
// document.onclick = function() {}就是典型的发布订阅异步绑定
// document.onclick = null 取消监听

/*
** 情况2
*/

// // click上绑定两个匿名函数
// document.addEventListener('click', function(){console.log('click1')})
// document.addEventListener('click', function(){console.log('click2')})
// // 想要取消监听必须 传入相同引用，所以传入匿名函数无法取消监听
// function clickEvent() {console.log('click3')}
// document.addEventListener('click', clickEvent);
// document.removeEventListener('click', clickEvent)  // 这样取消




// 异步流程结束去触发一些提前注册的函数 优雅