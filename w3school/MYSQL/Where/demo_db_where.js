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

  con.query("select * from customers WHERE address = 'Park Lane 38'", function (err, result) {
  if (err) throw err;
    console.log(result);
    console.log("name : %s ,address : %s ,id : %d", result[0].name, result[0].address, result[0].id );
  });
});
