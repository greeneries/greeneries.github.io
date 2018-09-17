

let obj = {a:10}; // a는 객체 생성할때 넣음

console.log(obj);
console.log(obj.b);
obj.b = 20; // b는 객체 생성 후 넣음
console.log(obj.b); // {a : 10, b: 20}

// c는 최대한 복잡하게 넣음
Object.defineProperty(obj, 'c', {
  value: 30,
  writable: false,
  enumerable: true,
  configurable : true
});

/*
{ value: 30,
  writable: false,
  enumerable: true,
  configurable: true }
 */
console.log(Object.getOwnPropertyDescriptor(obj, 'c')); // {a: 10, b: 20, c: 30}

obj.c = 40;
console.log(obj);
