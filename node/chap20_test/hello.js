function hello() {
  return 'Hello World';
}


function add(a, b) {
  return 'a + b';
}

console.log('exports === module.exports : ');
// exports 키워드는 module.exports를 가리키는 별칭입니다.
console.log(exports === module.exports);


// module.exports = hello;
// 이미 할당된 빈 객체를 버리고 새로운 객체를 할당하려면
// module.exports = 새 객체 형태로 사용해야 합니다.
// 별칭인 exports에 할당하면 exports가 가리키면 참조값(modules.exports)를 버리고
// 새 객체를 할당하는 것이 되고, 문제는 외부에 제공하는 객체는
// exports가 아니라 module.exports 이다.
module.exports = {
  'id':10,
  hello,
  add
};

//exports.color = 'Blue';
