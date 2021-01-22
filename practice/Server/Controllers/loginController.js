const { SELECT, QueryTypes } = require("sequelize");
const { sequelize } = require("../Models/truckModel");
const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const tokenMiddleware = require("../MIddlewasres/token");

function login(req, res) {
  sequelize
    .query(
      "select * from user where username = :username",
      {
        replacements: {
          username: req.body.username,
        },
        type: QueryTypes.SELECT,
      },
      {
        model: User,
      }
    )
    .then((user) => {
      user = user[0];
      console.log(user);
      if (user) {
        const samePassword = bcrypt.compareSync(
          req.sanitize(req.body.password),
          user.password
        );
        if (samePassword) {
          tokenMiddleware.generateToken(
            {
              user: {
                id: user.id_user,
                username: user.username,
              },
            },
            (token) => {
              res.status(200).send({
                token: token,
                username: `User ${user.username} logged in`,
              });
            }
          );
        } else {
          res.status(400).send(`Username or password is incorrect!`);
        }
      } else {
        res.status(400).send(`Username or password is incorrect!`);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("query went wrong try it again later");
    });
}

module.exports = {
  login,
};
