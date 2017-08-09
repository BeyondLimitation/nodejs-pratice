const mysql = require('mysql');

var con = mysql.createConnection({
  host: "container-name.network-name", //First arg : container name , Second one : docker network name
  user: "user",
  password: "password"
});

con.connect(function (err) {
  if (err){ throw err};
    console.log("연결됨!");
})
