const con = require("../Database/security");

function getActor(req, res) {
  const actor_id = req.sanitize(req.params.id);

  con.query(
    "select * from actor where actor_id = ?",
    actor_id,
    (err, result) => {
      if (!err) {
        res.status(201).json(result);
      } else {
        res.status(500).json(err);
      }
    }
  );
}

module.exports = {
  getActor,
};
