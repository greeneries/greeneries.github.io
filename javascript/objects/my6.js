// ES5 이후 사용하는 모습

// class Car {
//   constructor(){
//     let count = 4;
//     // 새로 생성되는 객체의 기본 property 추가하는 작업
//     this.color = 'Red'; // hidden property
//     this.doors = count;
//   }
//
//   show(){
//     console.log('this.color = '+ this.color);
//   }
//
//   static info(obj){
//     console.log('obj.color= '+ obj.color);
//   }
// }
//
//
// let car = new Car();
// car.show(); // 자식만 사용 가능
// Car.info({color:'Pink'}); // 상속과 무관, 누구라도 사용 가능

function Car(){
  let count = 4;
  this.color = 'Green';
  this.doors = count;
}

Car.prototype.show = function(){
  this.doors ++;
  console.log('this.color=' + this.color);
};

Car.info = function(obj){
  console.log('obj.color='+ obj.color);
};


let car = new Car();
car.show();
console.log(car.doors);
console.log(car.color);

Car.info({color:'Blue'});
