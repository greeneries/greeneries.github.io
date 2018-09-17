const fs = require('fs');
let data = 'hello from Node!';
//let dir = './node/493/hello.txt';
//let dir = __dirname;
///console.log(__dirname);
const path = require('path');
fs.writeFile(path.join(__dirname, 'hello.txt'), data, function(err) {
  if (err) return console.log('Error writing to file.');
  console.log('DONE.');
});
