const fs = require('fs');

fs.rename(__dirname+'/mynewFile1.txt', __dirname+'/myrenamedFile1.txt', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('파일 재명명됨!');
});
