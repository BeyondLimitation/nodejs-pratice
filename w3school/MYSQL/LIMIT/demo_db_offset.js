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

  con.query("SELECT * FROM customers LIMIT 5 OFFSET 2", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
