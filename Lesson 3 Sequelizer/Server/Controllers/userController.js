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

module.exports = {
  addUser,
};
