'use strict';

var _service = require('./service');

/*
import {add, say} from './service';
^^^^^^
SyntaxError: Unexpected token import
    at createScript (vm.js:80:10)
    at Object.runInThisContext (vm.js:139:10)
    at Module._compile (module.js:616:28)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:191:16)
    at bootstrap_node.js:612:3
 */

console.log((0, _service.add)(2, 3));

// const s = require('./service.js'); // p408
// console.log(s.add(2,3)); // 5
// console.log(s.say("susin")); // Hi sunsin!

// const {add, say} = require('./service.js'); // 해체, 할당 문법

/*
ECMA 채택한 모듈 시스템 기술 코드
ECMA는 자바스크립트 문법을 제정하는 표준기관입니다.
ECMA는 문법을 정하기만 하지 컴파일은 제공하지 않습니다.
따라서 node 컴파일러가 ECMA의 모듈시스템을 받아들이지 않고
자신만의 모듈 시스템을 채택하여 표준 문법임에도
node 컴파일러로 수행할 때 사용할 수 없는 상태입니다.

anguler, react 등이 최신 기술은 ECMA의 표준 문법을 사용하고자 함으로
개발자는 코드 작성은 표준문법으로 하고
코드 수행을 하기 전에 표준문법을 node가 이해하는 문법으로 변경하여 수행할 필요가 있습니다.

트랜스파일링 : 컴파일러가 이해하는 문법으로 변경하는 작업
 */

console.log((0, _service.say)('gildong'));
//# sourceMappingURL=client.js.map