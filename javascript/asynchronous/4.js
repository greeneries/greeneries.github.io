
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
    let result = 0;
    for(var i=start; i <= end; i++){
      result +=1;
    }

    let existError = false;
    if(Math.random() < 0.5){
        existError = true;
    }

// 에러가 발생하면
// 첫 번째 파라미터는 에러 객체 , 그 다음은 모두  null
    if(existError){
      let e = new Error('모든 코드는 비정상이 될 가능성이 있다.');
      cb(e, null);
    }else{
      cb(null, result);
    }

  },0);

}



console.log('START!!!');
let oldTime = Date.now();

  // 비동기 함수는 try 구문으로 에러를 잡을 수 없다.
  // 왜냐하면, 메인 스레드가 비동기 함수를 호출하고
  // 바로 다음 줄 코드를 처리하기 위해서 내려간다.
  // 비동기 함수는 아직 제대로 코드를 수행하기 전이므로
  // 에러를 발생할 틈이 없다.
  // 따라서 비동기 함수는 try 구문으로 에러를 받을 수 없다.
try{
  sumAsync(1, 1000000000, function (error, result){
    if(error){
      console.log('에러 대응 코드 : '+ error.message);
      return;
    }
      let value = result;
      console.log('value='+value);
  });
}catch(e){
  console.log('영원히 작동하지 않습니다.');
}


let newTime = Date.now();
console.log('Elapsed Time='+(newTime - oldTime));

console.log('긴급히 처리해야 하는 로직');

// 여기서부터는 코드가 없으므로 메인스레드는 IDLE 상태가 된다.
// 일을 시킬 때까지 그냥 논다.
// while(Date.now() < newTime + 20000){
//
// }
