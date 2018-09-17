

function add(a, b){
  return a + b;
}

function say(name){
  return 'Hi ' + name +'!';
}

console.log(exports === module.exports);

// exports.add = add;
// exports.say = say;

// module.exports = {
//   add,
//   say
// }

/*
  ECMA 채택한 모듈 시스템 기술 코드
 */

export{
  add,
  say
}
