const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Database/database");

class User extends Model {}

User.init(
  {
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
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
  .catch((error) => {
    console.log(error);
  });

module.exports = {
  User,
};
