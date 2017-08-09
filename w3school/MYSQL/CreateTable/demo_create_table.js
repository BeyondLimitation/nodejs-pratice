const mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "user",
	password: "password",
	database: "mydb"
});

con.connect(function(err) {
	if (err) throw err;
	console.log("연결됨!");
	//sql 문 실행
	var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";

	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log("Database 생성완료.");
	})
});
