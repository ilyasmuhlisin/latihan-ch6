var express = require('express');
var router = express.Router();

/* GET home page. */
router.use('/produk',require("./produk"));
router.use("/user", require("./user"));

module.exports = router;
