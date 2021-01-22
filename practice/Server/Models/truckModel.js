const { Model, INTEGER, STRING } = require("sequelize");
const sequelize = require("../database/database");

class Truck extends Model {}

Truck.init(
  {
    id_truck: {
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
  },
  {
    sequelize,
    modelName: "truck",
    tableName: "truck",
  }
);

sequelize
  .sync()
  .then()
  .catch((err) => {
    console.log(err);
  });

module.exports = Truck;
