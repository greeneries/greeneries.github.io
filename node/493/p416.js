const fs = require('fs');
fs.readdir(__dirname, function(err, files) { // files는 배열
  if (err) return console.error('Unable to read directory contents');
  console.log(`Contents of ${__dirname}:`);
  console.log(files); // 배열 
  console.log(files.map(f => '\t' + f).join('\n'));
});
