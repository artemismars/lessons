const model = require("../Models/userModel");
const tokenMiddleware = require("../Middlewares/token");
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
          tokenMiddleware.generateToken(
            {
              user: {
                id: user[0].id_user,
                username: user[0].username,
              },
            },
            (token) => {
              res.status(200).send({
                token: token,
                username: `User ${user[0].username} logged in`,
              });
            }
          );

          // res.status(200).send("Login successfully");
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
