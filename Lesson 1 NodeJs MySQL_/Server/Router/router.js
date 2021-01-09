const express = require("express");
const router = express.Router();

const actorController = require("../actorController/actorController");

router.get("/actor/:id", actorController.getActor);

module.exports = router;
