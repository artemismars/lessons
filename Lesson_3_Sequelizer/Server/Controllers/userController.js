const model = require("../Models/userModel");
const sequelize = require("../Database/database");
const bcrypt = require("bcrypt");

function addUser(req, res) {
  bcrypt.hash(req.sanitize(req.body.password), 10, (err, hash) => {
    sequelize
      .query(
        "INSERT INTO user (username, password) VALUES (:user)",
        {
          replacements: {
            user: [req.sanitize(req.body.username), hash],
          },
        },
        {
          model: model.User,
        }
      )
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((error) => {
        res.status(400).send("something went wrong, please try again later");
      });
  });
}

function updateUsername(req, res) {
  sequelize
    .query(
      "UPDATE user SET username = :username where id_user = :id",
      {
        replacements: {
          username: req.sanitize(req.body.username),
          id: req.sanitize(req.params.id),
        },
      },
      {
        model: model.User,
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
  addUser,
  updateUsername,
};
