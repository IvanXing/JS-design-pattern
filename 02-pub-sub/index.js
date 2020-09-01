const list = [];

function listen(fn) {
  list.push(fn);
}

function trigger(data) {
  list.forEach(item => item(data))
}

listen(
  function() {console.log('this is listen 1')}
)

listen(
  function() {console.log('this is listen 2')}
)

trigger()