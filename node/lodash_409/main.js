
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
// npm install lodash
const _ = require('lodash');


var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other); // => [1, 2, 3, [4]]
console.log(array); // => [1]

/*
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'C:\\Users\\TopC-32457\\Documents\\naye\\data\\node\\lodash_409\\main.js',
  loaded: false,
  children:
   [ Module {
       id: 'C:\\Users\\TopC-32457\\Documents\\naye\\data\\node_modules\\colors\\lib\\index.js',
       exports: [Object],
       parent: [Circular],
       filename: 'C:\\Users\\TopC-32457\\Documents\\naye\\data\\node_modules\\colors\\lib\\index.js',
       loaded: true,
       children: [Array],
       paths: [Array] },
     Module {
       id: 'C:\\Users\\TopC-32457\\Documents\\naye\\data\\node_modules\\lodash\\lodash.js',
       exports: [Object],
       parent: [Circular],
       filename: 'C:\\Users\\TopC-32457\\Documents\\naye\\data\\node_modules\\lodash\\lodash.js',
       loaded: true,
       children: [],
       paths: [Array] } ],
  paths:
   [ 'C:\\Users\\TopC-32457\\Documents\\naye\\data\\node\\lodash_409\\node_modules',
     'C:\\Users\\TopC-32457\\Documents\\naye\\data\\node\\node_modules',
     'C:\\Users\\TopC-32457\\Documents\\naye\\data\\node_modules',
     'C:\\Users\\TopC-32457\\Documents\\naye\\node_modules',
     'C:\\Users\\TopC-32457\\Documents\\node_modules',
     'C:\\Users\\TopC-32457\\node_modules',
     'C:\\Users\\node_modules',
     'C:\\node_modules' ] }
 */
console.log(module);
