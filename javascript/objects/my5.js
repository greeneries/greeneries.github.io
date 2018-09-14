// ES5 이후 사용하는 모습

class Car{
  constructor(){
    let count = 4;
    // 새로 생성되는 객체의 기본 property 추가하는 작업
    this.color = 'Red'; // hidden property
    this.doors = count;
  }

  // 부모가 자식 객체에게 제공하는 자원
  // 상속은 prototype만 연결됨
  // Car.prototype.show = function(){
  //   console.log(this.color);
  // };
  // Car의 prototype 객체에 추가한다.(중요)
  show(){
    console.log('this.color = '+ this.color);
  }

  // 상속과 무관함.
  // Car 함수 객체가 직접 갖고 있으면서 누구에게나 제공하고 싶은 자원을 배치
  // 함수객체에 info를 사용
  // 자바입장에서 static 자원과 비슷, new하고 사용하지 않음
  // Number.parseInt(('3.14'));
  // Car.info = function (obj){
  //   console.log('obj.color= '+ obj.color);
  // };
  // Car 함수 객체게 추가한다. (중요)
  static info(obj){
    console.log('obj.color= '+ obj.color);
  }
}

let car = new Car();
car.show(); // 자식만 사용 가능

// 함수가 직접 가지고 있는 자원은 아래와 같이 사용
Car.info({color:'Pink'}); // 상속과 무관, 누구라도 사용 가능
