

const x = 19.31;

const log = console.log;

log(x.toFixed(3));
console.log(x.toFixed(2));
x.toFixed(0);

console.log(Object.keys(Number.prototype));
console.log(Reflect.ownKeys(Number.prototype));


console.log(Math.min(7,3,11,5));
console.log(Math.max(7,3,11,5));

let arr = [7,5,11,4];
console.log(Math.min(...arr));
