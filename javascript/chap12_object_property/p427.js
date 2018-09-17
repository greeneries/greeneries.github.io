

let obj = {a:10}; // a는 객체 생성할때 넣음

console.log(obj);
console.log(obj.b);
obj.b = 20; // b는 객체 생성 후 넣음
console.log(obj.b); // {a : 10, b: 20}

// c는 최대한 복잡하게 넣음
Object.defineProperty(obj, 'c', {
  value: 30,
  writable: true,
  enumerable: true,
  configurable : true
});


// 해당 객체의 프로퍼티 상태를 조회합니다.
/*
{ value: 10,
  writable: true,
  enumerable: true,
  configurable: true }
 */
console.log(Object.getOwnPropertyDescriptor(obj, 'a')); // {a: 10, b: 20, c: 30}


// 해당 객체의 프로퍼티 상태를 조회합니다.
/*
{ value: 20,
  writable: true,
  enumerable: true,
  configurable: true }
 */
console.log(Object.getOwnPropertyDescriptor(obj, 'b')); // {a: 10, b: 20, c: 30}


// 해당 객체의 프로퍼티 상태를 조회합니다.
/*
{ value: 30,
  writable: true,
  enumerable: true,
  configurable: true }
 */
console.log(Object.getOwnPropertyDescriptor(obj, 'c')); // {a: 10, b: 20, c: 30}
