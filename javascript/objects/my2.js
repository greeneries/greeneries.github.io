// ES5 이전에 사용하던 모습

function Car(){
  let count = 4;

  // 새로 생성되는 객체의 기본 property 추가하는 작업
  this.color = 'Red'; // hidden property
  this.doors = count;
}


// 부모가 자식 객체에게 제공하는 자원
// 상속은 prototype만 연결됨
Car.prototype.show = function(){
  console.log('this.color = ' + this.color);
};

// 상속과 무관함.
// Car 함수 객체가 직접 갖고 있으면서 누구에게나 제공하고 싶은 자원을 배치
// 함수객체에 info를 사용
// 자바입장에서 static 자원과 비슷, new하고 사용하지 않음
// Number.parseInt(('3.14'));
Car.info = function (obj){
  console.log('obj.color= '+ obj.color);
};


let car = new Car();
console.log(car); // Car { color: 'Red', doors: 4 }
car.show(); // 자식만 사용 가능
console.log(car.doors); // 자식만 사용 가능, 부모의 자원을 사용

// 함수가 직접 가지고 있는 자원은 아래와 같이 사용
Car.info({color:'Pink'}); // 상속과 무관, 누구라도 사용 가능
