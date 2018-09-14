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
console.log(s);
console.log(s.length);
console.log(s.area);

s.area = 400;

console.log(s.length);
console.log(s.area);
