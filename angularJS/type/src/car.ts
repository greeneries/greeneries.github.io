
/*
  constructor에서 this.color를 사용하기 전에
  해당 property를 멤버변수로 선언해놓고 사용해야 한다.
 */
class Car {
  color: string;
  constructor(color : string = 'Red'){
    this.color = color;
  }
}

let car = new Car();
console.log(car.color);
