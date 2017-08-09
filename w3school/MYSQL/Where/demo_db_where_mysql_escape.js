var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "mydb"
});

var adr = "Mountain 21";
// var name = "Amy";

con.connect(function (err) {
  if (err) throw err;
  console.log("연결됨!");
  var sql = 'select * from customers WHERE address = ?';
  // #1 var sql = 'select * from customers WHERE address = ' +mysql.escape(adr);
  // #2 var sql = 'select * from customers WHERE name =? OR address = ?';
  con.query(sql, [adr], function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  // #1
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
  // #2
  // con.query(sql, [name, adr], function (err, result) {
  //   if (err) throw err;
  //   console.log(result);
  // });
});
