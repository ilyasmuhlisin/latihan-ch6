var express = require("express");
var router = express.Router();
const userController = require("../controller/userController");

/* GET users listing. */
router.get("/", userController.getallUser);
router.post("/register", userController.addUser);
router.post("/login", userController.login);

module.exports = router;
