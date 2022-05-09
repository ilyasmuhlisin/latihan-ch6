var express = require("express");
var router = express.Router();
const produkController = require("../controller/produkController");

/* GET users listing. */
router.get("/", produkController.getAllProduk);
router.post("/", produkController.addProduk);

module.exports = router;
