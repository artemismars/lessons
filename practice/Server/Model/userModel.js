const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Database/database");

class User extends Model {}

User.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
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
  .catch((err) => console.log(err));

module.exports = User;
