function countdown(seconds) {
  return new Promise(function(resolve, reject) {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(function() {
        if (i > 0) console.log(i + '...');
        else resolve(console.log("GO!"));
      }, (seconds - i) * 1000);
    }
  });
}



// let promise = countdown(10);
// console.log(promise instanceof Promise);



// countdown 함수가 작업결과 대신 작업 결과를 알려주겠다.
// primise(약속), 객체를 즉시 return 함으로 대기 현상이
// 발생하지 않습니다.
// promise.then(function(result) { // 성공 콜백
//
// }).catch(function(error) { // 실패 콜백
//
// }).finally(function() { // 최후의 항상 작동하는 콜백
//
// });



// function countdown(seconds){
//   return new Promise(function(resolve, reject){
//
//   }
// });
