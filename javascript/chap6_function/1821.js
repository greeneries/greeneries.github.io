function foo(){

  // console.log(this === foo);
  //
  // var fn = function(){
  //   console.log(this === global);
  //   console.log(this.a);
  // };
  //
  // var fnBind = fn.bind(this);

  setTimeout((function(){
    console.log(this.a);
  }).bind(this),100);

  //setTimeout(fnBind, 100);
}

// setTimeout((function(){
//   console.log(this.a);
// }).bind(this),100);

foo.a = 'foo.a';

foo.call(foo);
