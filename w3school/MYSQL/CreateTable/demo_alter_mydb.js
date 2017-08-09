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
	var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
	con.query(sql, function(err, result) {
		if (err) throw err;
		console.log("Table 수정완료.");
	})
});
