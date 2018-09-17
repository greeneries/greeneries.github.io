// 클래스는 호이스팅이 안 된다.
// 클래스는 재정의도 허용하지 않는다.
class Squre{
  constructor(length=10){
    this.length = length;
    this.area = length * length;
  }

  show(){
    console.log('this.length = '+ this.length);
  }
  get area(){
    return this.length * this.length;
  }
  set area(area){
    this.length = Math.sqrt(area);
  }
}

let s = new Squre();
console.log(s); // Squre { length: 10 }
console.log(s.length); // 10
console.log(s.area); // 100

s.area = 400;

console.log(s.length); // 20
console.log(s.area); // 400


/*
{ get: [Function: get area],
  set: [Function: set area],
  enumerable: false,
  configurable: true }
 */
console.log(Object.getOwnPropertyDescriptor(Squre.prototype, 'area'));
