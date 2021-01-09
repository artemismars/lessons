const con = require("mysql").createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "0000",
  database: "sakila",
});

module.exports = con;
