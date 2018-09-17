/*

일반 함수 VS 화살표 함수
- this 처리방식이 다르다.
- arguments 처리방식이 다르다.
- new 함수 문법 가능 여부
- 상속관련 prototype 객체 보류 여부

*/

// 노드에서는 전역 스코프의 this가 자동으로 처리되는
// export 객체를 가리킨다.
this.a = 'this.a';

var obj = {
  a: 'obj.a',
  show: function(){
    console.log(this === obj);
    //console.log(typeof arguments, arguments);
    console.log(this.a);
  },

// 객체 안에 화살표 사용하면 안 된다.
// 화살표를 사용하려면 전역 함수 안에 함수를 사용하고자 할때 this를 일치하고 싶을 때 사용해야 한다.
  print: () =>{
    console.log(this === exports);
    //console.log(typeof arguments, arguments);
    console.log(this.a);
  }
};

obj.show();
obj.print(20,20);
