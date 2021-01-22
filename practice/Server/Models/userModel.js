const { Model, INTEGER, STRING } = require("sequelize");
const { sequelize } = require("../Models/truckModel");

class User extends Model {}

User.init(
  {
    id_user: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
    tableName: "user",
  }
);

sequelize
  .sync()
  .then()
  .catch((err) => {
    console.log(err);
  });

module.exports = User;
