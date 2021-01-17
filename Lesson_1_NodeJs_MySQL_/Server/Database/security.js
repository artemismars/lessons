const con = require("mysql").createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "0000",
  database: "account",
});

module.exports = con;
