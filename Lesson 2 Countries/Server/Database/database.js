const mysql = require("mysql");
const password = require("./password");

const con = mysql.createConnection({
  host: "nunops.com",
  port: "3306",
  user: "nunops_user",
  password: password,
  database: "nunops_countries",
});

module.exports = con;
