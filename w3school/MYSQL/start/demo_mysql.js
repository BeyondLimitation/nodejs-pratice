const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password"
});

con.connect(function (err) {
  if (err) throw err;
    console.log("연결됨!");
})
