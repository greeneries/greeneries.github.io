

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

console.log(obj); // { a: 10, b: 20 }

// {a:10, b:20, c:30}
for (var variable in obj) {
  if (obj.hasOwnProperty(variable)) {
    console.log(obj[variable]);
  }
}

// 객체 안의 모든 property가 writable, configurable을 false로 바꾼다.
Object.freeze(obj);

/*
{ value: 30,
  writable: false,
  enumerable: true,
  configurable: false }
 */
console.log(Object.getOwnPropertyDescriptor(obj, 'c')); // {a: 10, b: 20, c: 30}

console.log(Object.isFrozen(obj)); // 객체가 frozen 상태인지 확인 
