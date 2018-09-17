/*
property의 2가지 종류
1. data description : data property
2. accessor description : 접근제어 property
 */

let obj = {a:10}; // data property

Object.defineProperty(obj, 'b', { // 접근제어 property
  get:function(){
    // 여기에 값을 가공하는 business 로직을 대체할 수 있다.
    return this.a * 8;
  },
  set:function(a){
    this.a = a / 10;
  },
  enumerable: true,
  configurable : true
});


console.log(obj); // { a: 10, b: [Getter/Setter] }
console.log(obj.a); // 10
console.log(obj); // { a: 10, b: [Getter/Setter] }

obj.b = 200;

console.log(obj); // { a: 20, b: [Getter/Setter] }
console.log(obj.b); // 160
