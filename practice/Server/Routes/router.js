const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const truckController = require("../Controllers/truckController");
const loginController = require("../Controllers/loginController");
const tokenMiddleware = require("../MIddlewasres/token");

router.post("/user", userController.addUser);
router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUserById);

router.post("/login", loginController.login);

router.post("/truck", (req, res) => {
  tokenMiddleware.validateToken(req.headers.authorization, (result) => {
    if (result) {
      truckController.addTruck(req, res);
    } else {
      res.status(400).send("invalid token!");
    }
  });
});
router.get("/trucks", (req, res) => {
  tokenMiddleware.validateToken(req.headers.authorization, (result) => {
    if (result) {
      truckController.getTrucks(req, res);
    } else {
      res.status(400).send("invalid token!");
    }
  });
});
router.get("/truck/:id", (req, res) => {
  tokenMiddleware.validateToken(req.headers.authorization, (result) => {
    if (result) {
      truckController.getTruckById(req, res);
    } else {
      res.status(400).send("invalid token!");
    }
  });
});

module.exports = router;
