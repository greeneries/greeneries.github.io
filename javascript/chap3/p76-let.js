var a = 10;
console.log(a);

let b = 10;
// let b = 10;  --> syntax 에러
console.log(b);

// Scope : 범위 연산자를 기준으로 해당 자원을 어느 위치에서
// 접근하여 사용할 수 있는가를 판단하는 기준

var x = 100;
if(true){
  console.log(x);
}
