const sequelize = require("../Database/database");
const { Model, DataTypes, STRING, INTEGER } = require("sequelize");

class Product extends Model {}

Product.init(
  {
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: STRING(45),
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
    modelName: "product",
    tableName: "product",
  }
);

// console.log("product model here");

sequelize
  .sync()
  .then()
  .catch((error) => console.log(error));

module.exports = {
  Product,
};
