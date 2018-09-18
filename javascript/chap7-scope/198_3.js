console.log('START!!!');


var fn = function fn(){
  console.log(i);
};

for(var i = 1; i <= 3; i++){
  console.log(i);
  setTimeout(fn,1000);
}

console.log('END');
