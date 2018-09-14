
// 시간 오래 걸리는 로직을 동기 방식으로 작성하면
// 사용자는 마치 프로그램이 멈춘 것처럼 느끼게 되므로 나쁘다.
// 이런 경우  비 동기 방식의 코딩으로 연결해야 한다.


console.log('START!!!');

function visitCafe(){
  var oldTime = Date.now();
  while(Date.now() < oldTime + 2000){
    // 손님이 꽉 차서 빈자리가 없다.
    // 손님의 빈 자리가 있는지 여부에 대한 문의를
    // 빈자리가 날 때까지 답변을 하지 않는다.
  }
  return true;
}

var empty = visitCafe();

if(empty){
  console.log('까페를 들어가서 식사를 한다.');
}

  console.log('서점에 가서 책을 구매한다.');
