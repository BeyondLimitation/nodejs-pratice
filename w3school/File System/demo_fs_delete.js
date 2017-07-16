const fs = require('fs');
fs.unlink(__dirname+'/mynewFile1.txt', function (err) {
  if (err) console.log(err);
  console.log("File Deleted!");
})
