

var arr = [41,10,5,99,28,0,777,23];

arr.sort((a,b) => a > b);

//console.log(arr);


var people = [
  {id:38, name:'Brad', age:45},
  {id:20, name:'Tom', age:34},
  {id:40, name:'Taan', age:64},
  {id:10,  name:'Aaron', age:18}
];

//people.sort((a,b) => a.id > b.id);
console.log(people.sort((a,b) => a.id > b.id));

console.log(people.sort((a,b) => a.name < b.name));
