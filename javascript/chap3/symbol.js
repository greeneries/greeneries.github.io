var obj = {};

const SIZE = Symbol();
obj[SIZE] = 8;

console.log(obj[SIZE]);
console.log(typeof SIZE);
console.log(SIZE.toString());

obj.x = 10; // x는 문자열 x로 취급한다.
obj[SIZE] = 0; // 유니크한 심볼을 프로퍼티 키로 사용하는 방법
console.log(obj[SIZE]);
