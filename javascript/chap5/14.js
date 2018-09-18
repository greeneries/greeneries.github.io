var a = 6;
function test(){
  var a = 7;
  function again(){
    var a = 8;
    console.log(a);   // 1번 alert(8);
  }
  again(); // 여기에서 again() 함수 호출하여 alert(8);이 실행 됨
  console.log(a);  // 2번 alert(8);
}
test(); // 이게 실행 안 됨, test()는 격리가 되어 있음
console.log(a); // 3번 alert(8);



// 19.함수를 생성자로 사용하여 만들어지는 객체가 부모의 자원을 참조하는 용도로 사용하는 프로퍼티를 서술하시오.
// 추가로, 모든 객체의 부모의 역할을 수행하는 객체이 이름을 서술하시오.
//  __proto__, Object.prototype


// 객체가 부모의 자원을 참조하는 용도로 사용하는 프로퍼티 :__proto__
// 모든 객체의 부모의 역할을 수행하는 객체의 이름 서술 : Object.prototype
//  __proto__, Object.prototype


/*


 */
