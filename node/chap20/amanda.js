function calculate(r) {
  return 4 / 3 * Math.PI * Math.pow(r, 3);
}

// 노드 내장 모듈, third party 모듈 폴더(node_modules/) 아래  ./ 기호없이 사용한다.
module.exports = calculate;


/*
Module {
  id: 'C:\\Users\\TopC-32457\\Documents\\naye\\data\\chap20\\amanda.js',
  exports: {},
  parent:
   Module {
     id: '.',
     exports: {},
     parent: null,
     filename: 'C:\\Users\\TopC-32457\\Documents\\naye\\data\\chap20\\main.js',
     loaded: false,
     children: [ [Circular] ],
     paths:
      [ 'C:\\Users\\TopC-32457\\Documents\\naye\\data\\chap20\\node_modules',
        'C:\\Users\\TopC-32457\\Documents\\naye\\data\\node_modules',
        'C:\\Users\\TopC-32457\\Documents\\naye\\node_modules',
        'C:\\Users\\TopC-32457\\Documents\\node_modules',
        'C:\\Users\\TopC-32457\\node_modules',
        'C:\\Users\\node_modules',
        'C:\\node_modules' ] },
  filename: 'C:\\Users\\TopC-32457\\Documents\\naye\\data\\chap20\\amanda.js',
  loaded: false,
  children: [],
  paths:
   [ 'C:\\Users\\TopC-32457\\Documents\\naye\\data\\chap20\\node_modules',
     'C:\\Users\\TopC-32457\\Documents\\naye\\data\\node_modules',
     'C:\\Users\\TopC-32457\\Documents\\naye\\node_modules',
     'C:\\Users\\TopC-32457\\Documents\\node_modules',
     'C:\\Users\\TopC-32457\\node_modules',
     'C:\\Users\\node_modules',
     'C:\\node_modules' ] }
 */
console.log(module);
