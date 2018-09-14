

// function car(){
//   var ret = car();
//   console.log(ret);
//
// }
//
// function Car(){ this.color = 'Red'; }
//
// var c = new Car();
// console.log(c);

/*
ECMA6에서부터 class 라고 하는 문법을 사용할 수 있습니다.
class 문법은 생성자 함수 작성 문법입니다.
 */

 class Person {
   constructor(name) {
     this.name = name;
     this.id = Person.nextId++;
   }
 }

 Person.nextId = 0;  // 값 초기화

 const jamie = new Person("Jamie"),
       juliet = new Person("Juliet"),
       peter = new Person("Peter"),
       jay = new Person("Jay");

  console.log(jamie);
  console.log(juliet);
  console.log(peter);
  console.log(jay);

  const arr = [jamie, juliet, peter, jay];
 // option 1: direct comparison of ID: arr.find(p => p.id === juliet.id);        // returns juliet object
 // option 2: using "this" arg: arr.find(p => p.id === this.id, juliet);  // returns juliet object


arr.some(item => item.name);
