


// const s = require('./service.js'); // p408
// console.log(s.add(2,3)); // 5
// console.log(s.say("susin")); // Hi sunsin!

const {add, say} = require('./service.js'); // 해체, 할당 문법 
console.log(add(2,3));
console.log(say('gildong'));
