const { QueryTypes } = require("sequelize");
const sequelize = require("../Database/database");
const model = require("../Models/carModel");

function addCar(req, res) {
  sequelize
    .query(
      `INSERT INTO Car (name, price, company) VALUES (:car)`,
      {
        replacements: {
          car: [req.body.name, parseInt(req.body.price), req.body.company],
        },
        type: QueryTypes.INSERT,
      },
      {
        model: model.Car,
      }
    )
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(400).send(`Query went wrong please try it again later!`);
    });
}

function getCars(req, res) {
  sequelize
    .query(
      `SELECT * FROM Car`,
      {
        type: QueryTypes.SELECT,
      },
      {
        model: model.Car,
      }
    )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Query went wrong, please try it again later!`);
    });
}

function getCarById(req, res) {
  sequelize
    .query(
      `SELECT * FROM Car where id_car = :id`,
      {
        replacements: { id: req.params.id },
        type: QueryTypes.SELECT,
      },
      {
        model: model.Car,
      }
    )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Query went wrong, please try it again later!`);
    });
}

function updateCarName(req, res) {
  sequelize
    .query(
      `UPDATE Car SET name = :name where id_car = :id`,
      {
        replacements: {
          id: req.params.id,
          name: req.body.name,
        },
        type: QueryTypes.UPDATE,
      },
      {
        model: model.Car,
      }
    )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(`Query went wrong, please try it again later!`);
    });
}

function deleteCar(req, res) {
  sequelize
    .query(
      `DELETE from Car where id_car = :id`,
      {
        replacements: {
          id: req.params.id,
        },
        type: QueryTypes.DELETE,
      },
      {
        model: model.Car,
      }
    )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(`Query went wrong, please try it again later!`);
    });
}

module.exports = {
  addCar,
  getCars,
  getCarById,
  updateCarName,
  deleteCar,
};
