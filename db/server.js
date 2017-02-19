const mysql = require('mysql');
var connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'root',
  database : 'mysql'
});

connection.connect();

var query = connection.query('SELECT * from employee');

query.on('error', (err) => {  throw err; });
//query.on('fields', (fields) => {console.log(fields);});
query.on('result', (rows) => {
  for (var index in rows) {
    console.log(rows[index]);
  }
});

connection.end();
