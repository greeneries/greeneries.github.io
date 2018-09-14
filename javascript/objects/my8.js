// 클래스는 호이스팅이 안 된다.
// 클래스는 재정의도 허용하지 않는다.
class Car{
  constructor(color){
    this.color = color || 'Red'; // parameter로 받은 값이 참 값이면 color 아니면 Red
  }
}


// sedan is car
class Sedan extends Car{

}


let car = new Car('Blue');
console.log(car);

let car2 = new Car();
console.log(car2);
