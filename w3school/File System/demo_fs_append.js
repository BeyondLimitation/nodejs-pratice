var fs = require('fs');

fs.appendFile('mynewFile1.txt', '안녕 컨텐츠?', (err) =>{
  if (err) {
    throw err;
  }
  console.log("저장됨!");
});
