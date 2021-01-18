const { getUser } = require("../Controller/loginController");
const { addUser } = require("../Controller/userController");

const router = require("express").Router();

router.get("/getuser", getUser);
router.post("/adduser", addUser);

module.exports = router;
