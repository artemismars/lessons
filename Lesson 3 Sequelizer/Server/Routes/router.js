const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const loginController = require("../Controllers/loginController");
const productController = require("../Controllers/productController");

router.post("/users", userController.addUser);
router.post("/login", loginController.login);
router.post("/product", productController.addProduct);
router.delete("/product", productController.deleteProduct);

module.exports = router;
