const http = require('http');

const dir = __dirname + '/';
let count = 0;
const server = http.createServer(function(req, res) {
  if (req.method === 'GET' && req.url === '/node/424_web_server/favicon.ico') {
    console.log('count : ', ++count);
    const fs = require('fs');
    fs.createReadStream('node/424_web_server/favicon.ico');
    fs.pipe(res); // this replaces the call to 'end'
  } else {
    console.log(`${req.method} ${req.url}`);
    res.end('Hello world!');
  }
});

const port = 8080;
server.listen(port, function() { // you can pass a callback to listen that lets you know    // the server has started
  console.log(`server startd on port ${port}`);
});
