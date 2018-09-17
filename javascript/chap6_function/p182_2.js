
function foo(){

  // var fn = function(){
  //   console.log(this.a);
  // };


  // var fn = (function(){
  //   console.log(this.a);
  // }).bind(this);


// 화살표 함수는 this가 lexical scope(코드 위치)를 기준으로
// 가장 가까운 this에 자동으로 bind되고 고정된다.
  var fn = () => console.log(this.a);
  setTimeout(fn,100);

}

foo.a = 'foo.a';
foo.call(foo);
