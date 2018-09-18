
// Javascript의 scope는 크게 보아서 2가지가 있다.
// 1. global scope
//     파일 시작 ~ 파일 끝
//     소스코드를 여러 파일로 나눈 후  import해서 사용하면 global scope 확장된다.
// 2. function scope
//    함수 스코프 = 파라미터 선언 부분 + ( 코드 부분 )
// 3. 동적으로 생성되는 클로저 스코프
// + 동적으로 생성되는 클로저 스코프
function f(x){
  return x + 3;
}

console.log(x);
console.log(f(5));
