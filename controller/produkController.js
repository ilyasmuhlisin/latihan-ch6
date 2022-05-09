const { Produk } = require("../models");

module.exports = class {
  static addProduk(req, res, next) {
    Produk.create({
      title: req.body.title,
      SubjectId: req.body.SubjectId,
    })
      .then((result) => {
        res.status(201).send({
          status: 201,
          message: "New Group created!",
          data: result,
        });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }

  static getAllProduk(req, res, next) {
    Produk.findAll()
      .then((result) => {
        res.status(200).send({
          status: 200,
          data: result,
        });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
};
