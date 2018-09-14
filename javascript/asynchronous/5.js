

// callback 함수를 종\\\\

setTimeout(function(){
  console.log('1');
  setTimeout(function(){
    console.log('2');
    setTimeout(function(){
      console.log('3');
    },0);
    console.log('4');
  },0);
  console.log('5');
},0);
