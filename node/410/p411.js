// 노드는 노드 앱을 ㅣㅅㄹ행할 때 어떤 모듈이든 단 한 번만 import한다.
// 서로 다른 함수이지만 둘은 같은 lastMessage를 참조한다.
const debug1 = require('./debug')('one');
const debug2 = require('./debug')('two');

debug1('started first debugger!')
debug2('started second debugger!')

setTimeout(function() {
  debug1('after some time...');
  debug2('what happens?');
}, 200);
