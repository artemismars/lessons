const sequelize = require("../Database/database");
const bcrypt = require("bcrypt");
const User = require("../Model/userModel");
const { raw } = require("express");

function addUser(req, res) {
  bcrypt.hash(req.sanitize(req.body.password), 10, (err, hash) => {
    sequelize
      .query(
        "insert into user (username, password, email) values (:user)",
        {
          replacements: {
            user: [req.sanitize(req.body.username), hash, req.body.email],
          },
        },
        {
          model: User,
        }
      )
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send("something went wrong, please try again later!");
      });
  });
}

module.exports = {
  addUser,
};
