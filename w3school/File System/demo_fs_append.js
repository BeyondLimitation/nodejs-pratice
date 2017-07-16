var fs = require('fs');

fs.appendFile(__dirname+'/mynewFile1.txt', '안녕 컨텐츠?', (err) =>{
  if (err) {
    throw err;
  }
  console.log("%s/에 저장됨!",__dirname);
});
