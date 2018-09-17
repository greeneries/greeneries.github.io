
const fs = require('fs');
console.log(typeof fs);

// 이미 처리한 대상을 재 사용한다.
const fs2 = require('fs');
console.log(fs === fs2); // true

const colors = require('colors');

console.log('Hello'.green);
console.log('Hello'.yellow);
console.log('Hello'.red);

// book 폴더 밑에 있는 node_modules 폴더 밑에 설치되어 있는 것을 사용합니다.
const _ = require('lodash');


var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other); // => [1, 2, 3, [4]]
console.log(array); // => [1]
console.log(module);
