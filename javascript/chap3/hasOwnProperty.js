
var name = "Tom";
var age = 33;
var address = "Seoul Korea";


var html =   `<div>
                <h3>${name} <mark> ${age} </mark></h3>
                <p>${address}</p>
              </div>`;

console.log(html);


const obj = {a:10};
obj.a = 20;

console.log(obj);

var object = {
  a: 10,
  b: 20,
  print : function(){
    console.log(this.a + this.b);
  }
};

// 객체를 대상으로 객체의 프로퍼티  개수만큼 반복하면서 하나씩 꺼내어 처리 할때 사용한다.
for(var variable in object){
  if(object.hasOwnProperty(variable)){
      if(typeof object[variable] !== 'function'){ // 변수이면 출력하고
        console.log(object[variable]);
      }else{ // 함수이면 호출하자
        object[variable](); // object.print();
      }
  }
}
