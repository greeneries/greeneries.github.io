
// moment-timezone 라는 이름으로 제공되는 노드 내장모듈이 존재하지 않는다.
// 써드 파티에서 제공하는 기술로서 프로젝트 루트 밑으로 존재하는 node_modules 폴더 밑에 설치되지 않았다.
// npm init
// 설치 방법 : npm install moment-timezone
const moment = require('moment-timezone'); // Error: Cannot find module 'moment-timezone'

var now = new Date();
console.log('Hello World');
var day = moment().format('YYYY-MM-DD hh:mm:ss');
console.log(day);

// var now = new Date(); // ReferenceError: document is not defined
// document.write('Hello World ');
// var day = moment().format('YYYY-MM-DD hh:mm:ss');
// document.write(day);
