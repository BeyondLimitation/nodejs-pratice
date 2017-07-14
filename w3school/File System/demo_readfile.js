var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile(__dirname+'/demofile1.html', 'utf-8', function (err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
  });
}).listen(8080);
console.log('program started');
