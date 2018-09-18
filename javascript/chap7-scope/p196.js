


let f;

{
  let o = {
    note : 'Safe'
  };

  f = function(){
    return o;
  };
}

// let oRef = f; // f 함수 값이 저장 됨
let oRef = f(); // 함수를 실행했으니 o 객체가 oRef에 저장됨
oRef.note = "Not so safe after all!";

console.log(oRef);
