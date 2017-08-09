var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "mydb"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("연결됨!");
  con.query('select * from customers ORDER BY name DESC' , function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
