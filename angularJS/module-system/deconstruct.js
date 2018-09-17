let obj = {
  a: 10,
  b: 20,
  add:function(x,y){
    console.log('sum=',x+y);
  }
};


// let a = obj.a;
// let b = obj.b;

// let adder = obj.add;
// adder(a,b);
b = 30;

let {a, add} = obj; // let adder = obj.add;
add(a,b);
