const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("연결됨!");

  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database 생성완료.");
  })
});
