const now = new Date();

console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());

const xmas = new Date(2018,11,25);
console.log(xmas.getDay()); // 0은 일요일


/*
/정규표현식/옵션
정규표현식 선언법으로 작성하면 바로 객체로 취급된다.
 */

const email = /@/gi;
console.log(email.__proto__ === RegExp.prototype);
console.log(email.test("abc.com")); // false
console.log(email.test("abc@def.com")); // true
