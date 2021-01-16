const model = require("../Models/userModel");
const sequelize = require("../Database/database");
const bcrypt = require("bcrypt");

function login(req, res) {
  sequelize
    .query(
      "SELECT * from user WHERE username = :username;",
      {
        replacements: {
          username: [req.sanitize(req.body.username)],
        },
      },
      {
        model: model.User,
      }
    )
    .then((user) => {
      user = user[0];

      if (user.length) {
        const samePassword = bcrypt.compareSync(
          req.sanitize(req.body.password),
          user[0].password
        );
        if (samePassword) {
          res.status(200).send("Login successfully");
        } else {
          res.status(400).send("Unsername or Password incorrect");
        }
      } else {
        res.status(400).send("Username or Password incorrect");
      }
    })
    .catch((error) => {
      res.status(400).send(error);
    });
}

module.exports = {
  login,
};
