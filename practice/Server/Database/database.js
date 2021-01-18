const { Sequelize } = require("sequelize");
const password = require("./password");

const sequelize = new Sequelize("restaurant", "root", password, {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  logging: false,
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
