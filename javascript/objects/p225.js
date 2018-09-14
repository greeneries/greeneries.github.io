

let obj = {
  a:10,
  b:20,
  cc: function (){
    console.log('Hello');
  }
};

let keys = Object.keys(obj);
console.log(typeof keys);
console.log(Array.isArray(keys));
console.log(keys);

Object.keys(obj) // {'a','b','cc'}
      .filter(prop => prop.length < 2) // {'a','b'}
      .forEach(prop => console.log(`${prop}: obj[${prop}]`));
