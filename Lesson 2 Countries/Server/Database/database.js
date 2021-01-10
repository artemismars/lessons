const mysql = require("mysql");

const con = mysql.createConnection({
  host: "nunops.com",
  port: "3306",
  user: "nunops_user",
  password: "tR?D@Pn84REm",
  database: "nunops_countries",
});

module.exports = con;
