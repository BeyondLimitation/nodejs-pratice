var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("select * from customers WHERE address LIKE 'S%'", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
});
