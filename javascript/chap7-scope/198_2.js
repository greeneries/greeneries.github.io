console.log('START!!!');


// var fn = function fn(){
//   console.log(i);
// };

for(let i = 1; i <= 3; i++){
  //console.log("for: "+i);
  setTimeout(function (){
    console.log(i);
  }, 1000);
}

console.log('END');
