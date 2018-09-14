

// function Car(){
//
// }
//
//console.log(Car()); //오용
// let car = new Car();
// console.log(car);

// 생성자 함수임에도 메소드처럼 사용하는 것을 막지 못했던 부분을
// class 키워드로 생성자 함수를 만들면 막을 수 있습니다.

class Car{

}
// console.log(Car()); // Error, 생성자 Car를 왜 new 없이 호출하느냐

let car = new Car();
console.log(car);
