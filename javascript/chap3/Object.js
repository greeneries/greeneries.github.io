

var obj = {
  a:10,
  b:20
};

console.log(obj.__proto__ === Object.prototype);
obj.__proto__ = {c:10};

for(var variable in obj){
  if(obj.hasOwnProperty(variable)){
    console.log(obj[variable]);
  }
}

console.log("-----------------------------");
for(var variable in obj){
    console.log(obj[variable]);
}
