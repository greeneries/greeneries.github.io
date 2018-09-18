var ary = [];
ary[0] = 1;
console.log(ary);

ary.push(2);
console.log(ary);

ary.push("Hi");
console.log(ary);

/*
JSON(Java)


 */
var obj = {a:10,b:20};
var json = JSON.stringify(obj); // 객체 -> json으로 변경
console.log(typeof json); // string
console.log(json); // {"a":10,"b":20}

console.log('-----------------------------------');
var object = JSON.parse(json); // JSON -> Object로 변경
console.log(typeof object); // object
console.log(object); // { a: 10, b: 20 }

console.log('-----------------------------------');
var ary = [10,20,30];
obj.ary = ary;
console.log(JSON.stringify(obj)); // 객체 -> JSON으로 {"a":10,"b":20,"ary":[10,20,30]}
