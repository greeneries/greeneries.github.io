// function foo(){
//    setTimeout(function(){
//      console.log(this.a);
//    },100);
// }

function foo(){
  setTimeout((function(){
    console.log(this.a);
  }).bind(this),100);
}


foo.a = 'foo.a';

foo();
foo.call(foo);
