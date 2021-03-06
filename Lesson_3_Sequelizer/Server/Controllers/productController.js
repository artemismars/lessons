const model = require("../Models/productModel");
const sequelize = require("../Database/database");
const { QueryTypes } = require("sequelize");

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
        type: QueryTypes.INSERT,
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
      "delete from product where id_product = :id_product",
      {
        replacements: {
          productName: req.sanitize(req.params.id),
        },
        type: QueryTypes.DELETE,
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

function getProducts(req, res) {
  sequelize
    .query(
      "select * from product",
      {
        replacements: {
          productName: req.sanitize(req.body.productName),
        },
        type: QueryTypes.SELECT,
      },
      {
        model: model.Product,
      }
    )
    .then((data) => {
      // console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(`query went wrong please try again later!`);
    });
}

function getProductById(req, res) {
  sequelize
    .query(
      "select * from product where id_product = :id_product",
      {
        replacements: {
          id_product: req.sanitize(req.params.id),
        },
        type: QueryTypes.SELECT,
      },
      {
        model: model.Product,
      }
    )
    .then((data) => {
      // console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).send("query went wrong, please try it again later!");
    });
}

function updateProduct(req, res) {
  sequelize
    .query(
      "update product set productName = :productName, price = :price, company = :company where id_product = :id_product",
      {
        replacements: {
          productName: req.body.productName,
          price: req.body.price,
          company: req.body.company,
          id_product: req.params.id,
        },
        type: QueryTypes.UPDATE,
      },
      {
        model: model.Product,
      }
    )
    .then((data) => {
      // console.log(data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(`query went wrong please try it again later`);
    });
}

module.exports = {
  addProduct,
  deleteProduct,
  getProducts,
  getProductById,
  updateProduct,
};
