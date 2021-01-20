const { Model, INTEGER, STRING } = require("sequelize");
const sequelize = require("../Database/database");

class Car extends Model {}

Car.init(
  {
    id_car: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    price: {
      type: INTEGER,
      allowNull: false,
    },
    company: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Car",
    tableName: "Car",
  }
);

sequelize
  .sync()
  .then()
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  Car,
};
