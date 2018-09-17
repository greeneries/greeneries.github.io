const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, 'hello.txt'), {
  encoding: 'utf8'
});

// 이벤트 리스너임으로 'data'는 예약어이다.
rs.on('data', function(data) {
  console.log('>> data: ' + data.replace('\n', '\\n'));
});
rs.on('end', function(data) {
  console.log('>> end');
});
