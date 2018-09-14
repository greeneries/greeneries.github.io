// class Car {
//  constructor(make, model) {
//    this.make = make;
//    this.model = model;
//    this.userGears = ['P', 'N', 'R', 'D'];
//    this.userGear = this.userGears[0];
//  }
//  shift(gear) {
//    if (this.userGears.indexOf(gear) < 0) throw new Error(`Invalid gear: ${gear}`);
//    this.userGear = gear;
//  }
// }

function Car(make, model){
  this.make = make;
  this.model = model;
  this.userGears = ['P', 'N', 'R', 'D'];
  this.userGear = this.userGears[0];
}

Car.prototype.shift = function(gear){
  if (this.userGears.indexOf(gear) < 0)
    throw new Error(`Invalid gear: ${gear}`);
    this.userGear = gear;
};


let car = new Car('Hyundai','Genesis');
car.shift('D');
console.log(car);
