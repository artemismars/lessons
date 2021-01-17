const model = require("../Models/productModel");
const sequelize = require("../Database/database");

function addProduct(req, res) {
  sequelize
    .query(
      "INSERT INTO product (productName, price, company) VALUES (:product)",
      {
        replacements: {
          product: [
            req.sanitize(req.body.productName),
            parseInt(req.body.price),
            req.body.company,
          ],
        },
      },
      {
        model: model.Product,
      }
    )
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("something went wrong, please try again later");
    });
}

function deleteProduct(req, res) {
  sequelize
    .query(
      "delete from product where productName = :productName",
      {
        replacements: {
          productName: req.body.productName,
        },
      },
      {
        model: model.Product,
      }
    )
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send("something went wrong, please try again later");
    });
}

module.exports = {
  addProduct,
  deleteProduct,
};
