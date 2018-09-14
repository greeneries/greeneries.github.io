// 클래스는 호이스팅이 안 된다.
// 클래스는 재정의도 허용하지 않는다.
class Car{
  constructor(color){
    this.color = color || 'Red'; // parameter로 받은 값이 참 값이면 color 아니면 Red
  }
}


// sedan is car
class Sedan extends Car{
// constructor 함수를 생략하면 넣어준다.
// 심지어, 부모 함수에게 파라미터도 전달해준다.
  constructor(colour){
    super(colour);
  }
}

var sedan = new Sedan('violet'); // Sedan { color: 'violet' }
console.log(sedan);
