const con = require("../Database/security");
const bcrypt = require("bcrypt");

function getUser(req, res) {
  const id_user = req.sanitize(req.params.id);

  con.query(
    "select username from user where id_user = ?",
    id_user,
    (err, result) => {
      if (!err) {
        res.status(200).json(result);
      } else {
        res.status(500).json(err);
      }
    }
  );
}

function createUser(req, res) {
  const username = req.sanitize(req.body.username);
  const password = req.sanitize(req.body.password);

  bcrypt.hash(password, 10, (error, hash) => {
    if (!error) {
      con.query(
        "insert into user (username, password) values (?, ?)",
        [username, hash],
        (err, result) => {
          if (!err) {
            res.status(201).json(result);
          } else {
            console.log(err);
            res.status(500).json(err);
          }
        }
      );
    } else {
      res.status(500).json("failed to bcrypt password");
    }
  });
}

module.exports = {
  getUser,
  createUser,
};
