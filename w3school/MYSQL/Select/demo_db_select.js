var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("연결됨!");

  con.query("select * from customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
