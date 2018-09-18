// 숫자, 문자열은 immutale입니다.
//

var str = "Hello";
var str2 = "Hello";
var str3 = new String("Hello");

// console.log(str);
// console.log(str2);
// console.log(str3);
// console.log(str3.toString());

// == : 동등 비교 연산자, 취급하는 값이 같나요?
// === : 동일 비교 연산자 , 메모리가 같은 곳인가요?
console.log(str == str2);  // true
console.log(str === str2); // true

console.log(str == str3);  // true
console.log(str === str3); // false

function StringBuilder() {
    this._array = [];
    this._index = 0;
}

StringBuilder.prototype.append = function (str) {
    this._array[this._index] = str;
    this._index++;
};

StringBuilder.prototype.toString = function () {
    return this._array.join('');
};

var sb = new StringBuilder();


for(var i =0; i < 10; i++){
  sb.append(i);
}

console.log(sb.toString());
