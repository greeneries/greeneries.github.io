
// javascript 노드가 제공하는 비동기 함수를 선택하여 사용합니다.
// 또는, 브라우저가 제공하는 web worker 기술을 사용하여
// 시간이 오래 걸리는 로직을 위험할 수도 있습니다.
// 또는, 시간이 오래 걸리는 블록 연산을 다른 서버
// API에게 요청하여 그 결과를 받아서 사용할 수 있습니다.

// #1. 노드가 제공하는 비동기 함수 흉내를 내 보자
function sumAsync(start, end, cb){
  // setTimeout 함수에 전달한 cb 함수가 기동하기 위한 2가지 조건
  // 1. 시간이 지나야 한다.
  // 2. 개발자가 사용할 수 있는 단 하나의 메인스레드가
  // 다른 일을 하고 있지 않는 IDLE 상태여야 한다.
  setTimeout(function(){
    // let result = 0;
    // for(var i=start; i <= end; i++){
    //   result +=1;
    // }
    let result = test(start, end);
    cb(result);
  },0);
}

function test(start, end){
  let result = 0;
  for(var i=start; i <= end; i++){
    result +=1;
  }
  return result;
}


// function sumSync(start, end){
//   let result = 0;
//   for(var i=start; i <= end; i++){
//     result +=1;
//   }
//   return result;
// }


console.log('START!!!');
let oldTime = Date.now();

// let val = sumSync(1,10000000);
sumAsync(1, 1000000000, function (result){
  let value = result;
  console.log('value='+value);
});


let newTime = Date.now();
console.log('Elapsed Time='+(newTime - oldTime));

console.log('긴급히 처리해야 하는 로직');

// 여기서부터는 코드가 없으므로 메인스레드는 IDLE 상태가 된다.
// 일을 시킬 때까지 그냥 논다.
// while(Date.now() < newTime + 20000){
//
// }
