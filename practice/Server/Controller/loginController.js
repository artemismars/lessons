const sequelize = require("../Database/database");
const User = require("../Model/userModel");

function getUser(req, res) {
  sequelize
    .query(
      "select * from user where username = :username",
      {
        replacements: {
          username: req.sanitize(req.body.username),
        },
        type: sequelize.QueryTypes.SELECT,
      },
      {
        model: User,
      }
    )
    .then((data) => {
      console.log(data.length);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("query went wrong, please try again later!");
    });

  console.log(res);
}

module.exports = {
  getUser,
};
