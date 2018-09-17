

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
  configurable : false // 삭제 불가 
});

console.log(obj); // { a: 10, b: 20 }

// {a:10, b:20, c:30}
for (var variable in obj) {
  if (obj.hasOwnProperty(variable)) {
    console.log(obj[variable]);
  }
}

delete obj.c;

// configuration : false 이므로 삭제되지 않는다.
console.log(obj); // { a: 10, b: 20, c: 30 }
