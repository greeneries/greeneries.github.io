
const fs = require('fs');
const path = require('path');

console.log(path.join(__dirname, 'hello.txt'));

// end를 호출하기 전에는 write를 여러 번 호출할 수 있으므로,
// 시간을 두고 데이터를 보낼 때는 쓰기 스트림이 이상적입니다.
const ws = fs.createWriteStream(path.join(__dirname, 'hello.txt'), {
  encoding: 'utf8'
});
ws.write('hello\n');
ws.write('world\n');
ws.end();
