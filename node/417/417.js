const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'data'), function(err, files) {
      if (err) {
        console.error("Fatal error: couldn't read data directory.");
        process.exit(1); // 프로그램 비정상 종료 하겠다는 의미
      }
      const txtFiles = files.filter(f => /\.txt$/i.test(f));

      if (txtFiles.length === 0) {
        console.log("No .txt files to process.");
        process.exit(0); // 프로그램 정상 종료 하겠다는 의미
      } // process .txt files...
      console.log(txtFiles.join('\n'));
});



// const fs = require('fs');
// const path = require('path');
//
// fs.readdir('data', function(err, files) {
//       if (err) {
//         console.error("Fatal error: couldn't read data directory.");
//         process.exit(1); // 프로그램 비정상 종료 하겠다는 의미
//       }
//       const txtFiles = files.filter(f => /\.txt$/i.test(f));
//
//       if (txtFiles.length === 0) {
//         console.log("No .txt files to process.");
//         process.exit(0); // 프로그램 정상 종료 하겠다는 의미
//       } // process .txt files...
//       console.log(txtFiles);
// });
