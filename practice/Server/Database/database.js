const { Sequelize } = require("sequelize");
const pwd = require("./security");

const sequelize = new Sequelize("vehicle", "root", pwd, {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  logging: false,
  define: {
    timestamps: false,
    createdAt: true,
  },
});

module.exports = sequelize;
