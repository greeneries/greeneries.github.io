console.log('---------1----------');

// hello.js 코드를 수행하고 그 결과인
// hello.js의 module.exports 객체를 할당한다.
const hello = require('./hello.js');
console.log('---------2----------')

console.log(hello);
console.log(hello.id);
console.log(hello.hello());
console.log(hello.add(2,3));
