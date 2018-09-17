
// 객체를 해체하여 할당하기 
// a normal object
const obj = { b: 2, c: 3, d: 4 };
// object destructuring assignment
const {a, b, c} = obj;
a; // undefined: there was no property "a" in obj
b; // 2
c; // 3

console.log(c);
//d; // reference error: "d" is not defined
