const exec = require('child_process').exec;

// 콘솔에서 dir 명령을 사용하듯이
// 노드 코드에서 사용하고 그 결과를 콜백함수를 받는다.
exec('dir', function(err, stdout, stderr) {
  if (err) return console.error('Error executing "dir"');
  stdout = stdout.toString(); // convert Buffer to string
  console.log(stdout);
  stderr = stderr.toString();
  if (stderr !== '') {
    console.error('error:');
    console.error(stderr);
  }
});
