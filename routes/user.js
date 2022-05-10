var express = require("express");
var router = express.Router();
const userController = require("../controller/userController");
const auth = require("../middleware/auth");
/* GET users listing. */
router.get("/", userController.getallUser);
router.post("/register", userController.addUser);
router.post("/login", userController.login);
router.get("/getdatafromtoken", auth);

module.exports = router;
