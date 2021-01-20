const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const loginController = require("../Controllers/loginController");
const tokenMiddleware = require("../Middlewares/token");

const productController = require("../Controllers/productController");
const carController = require("../Controllers/carController");

router.post("/users", userController.addUser);
router.patch("/users/:id", (req, res) => {
  tokenMiddleware.validateToken(req.headers.authorization, (result) => {
    if (result) {
      userController.updateUsername(req, res);
    } else {
      res.status(401).send("Invalid Token");
    }
  });
});
router.post("/login", loginController.login);

router.post("/product", productController.addProduct);
router.delete("/product/:id", productController.deleteProduct);
router.put("/product/:id", productController.updateProduct);
router.get("/product", productController.getProducts);
router.get("/product/:id", productController.getProductById);

router.post("/car", (req, res) => {
  tokenMiddleware.validateToken(req.headers.authorization, (result) => {
    if (result) {
      carController.addCar(req, res);
    } else {
      res.status(401).send("Invalid Token");
    }
  });
});
router.get("/car", (req, res) => {
  tokenMiddleware.validateToken(req.headers.authorization, (result) => {
    if (result) {
      carController.getCars(req, res);
    } else {
      res.status(401).send("Invalid Token");
    }
  });
});
router.get("/car/:id", (req, res) => {
  tokenMiddleware.validateToken(req.headers.authorization, (result) => {
    if (result) {
      carController.getCarById(req, res);
    } else {
      res.status(401).send("Invalid Token");
    }
  });
});
router.put("/car/:id", (req, res) => {
  tokenMiddleware.validateToken(req.headers.authorization, (result) => {
    if (result) {
      carController.updateCarName(req, res);
    } else {
      res.status(401).send("Invalid Token");
    }
  });
});
router.delete("/car/:id", (req, res) => {
  tokenMiddleware.validateToken(req.headers.authorization, (result) => {
    if (result) {
      carController.deleteCar(req, res);
    } else {
      res.status(401).send("Invalid Token");
    }
  });
});

module.exports = router;
