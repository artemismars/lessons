const { QueryTypes } = require("sequelize");
const Truck = require("../Models/truckModel");
const { sequelize } = require("../Models/truckModel");

function addTruck(req, res) {
  sequelize
    .query(
      "INSERT INTO truck (name, price) VALUES (:truck)",
      {
        replacements: {
          truck: [req.body.name, req.body.price],
        },
        type: QueryTypes.INSERT,
      },
      {
        model: Truck,
      }
    )
    .then((data) => {
      //   console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Query went wrong, try it later again");
    });
}

function getTrucks(req, res) {
  sequelize
    .query("select * from truck", {
      model: Truck,
    })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("query went wrong please try it again later");
    });
}

function getTruckById(req, res) {
  sequelize
    .query(
      "select * from truck where id_truck = :id",
      {
        replacements: { id: req.params.id },
        type: QueryTypes.SELECT,
      },
      {
        model: Truck,
      }
    )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("query went wrong please try it again later");
    });
}

module.exports = {
  addTruck,
  getTrucks,
  getTruckById,
};
