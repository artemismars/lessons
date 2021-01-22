const bcrypt = require("bcrypt");
const { QueryTypes } = require("sequelize");
const User = require("../Models/userModel");
const { sequelize } = require("../Models/userModel");

function addUser(req, res) {
  bcrypt.hash(req.sanitize(req.body.password), 10, (err, hash) => {
    sequelize
      .query(
        "INSERT INTO user (username, password) VALUES (:user)",
        {
          replacements: {
            user: [req.body.username, hash],
          },
          type: QueryTypes.INSERT,
        },
        {
          model: User,
        }
      )
      .then((data) => {
        console.log(data);
        res.status(201).send(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send("query went wrong try it later again!");
      });
  });
}

function getUsers(req, res) {
  sequelize
    .query(
      "select * from user",
      {
        type: QueryTypes.SELECT,
      },
      {
        model: User,
      }
    )
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("query went wrong try it later again!");
    });
}

function getUserById(req, res) {
  sequelize
    .query(
      "select * from user where id_user = :id_user",
      {
        replacements: req.body.id,
        type: QueryTypes.SELECT,
      },
      {
        model: User,
      }
    )
    .then((data) => {
      console.log(data);
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("query went wrong try it later again!");
    });
}

module.exports = {
  addUser,
  getUsers,
  getUserById,
};
