const password = require("./password");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("nunops_database", "nunops_user", password, {
  host: "nunops.com",
  port: "3306",
  dialect: "mysql",
  logging: false,
  defined: {
    timestamps: false,
  },
});

module.exports = sequelize;
