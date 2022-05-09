const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("../helper/jwt");

module.exports = class {
  static addUser(req, res, next) {
    User.create(
      req.body
      // name: req.body.name,
      // class: req.body.class,
      // age: req.body.age,
      // GroupId: req.body.GroupId,
    )
      .then((result) => {
        console.log(result);
        res.status(201).send({
          status: 201,
          message: "New user created!",
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  static getallUser(req, res, next) {
    User
      .findAll
      //   {
      //   where: { ...req.query },
      //   include: [{ model: Groups }],
      // }
      ()
      .then((result) => {
        console.log(result);
        res.status(200).send({
          status: 200,
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static async login(req, res, next) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!user) {
        res.status(404).send({
          status: 404,
          message: "user Not Found!",
        });
      }
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isValidPassword) {
        res.status(404).send({
          status: 400,
          message: "Email and Password not match!",
        });
      }
      const token = jwt.generateToken({
        email: user.email,
        password: user.password,
      });
      const secureuser = user.dataValues;
      delete secureuser.password;
      res.status(200).send({
        status: 200,
        message: "user Found",
        data: {
          user: {
            secureuser,
            password: "secret",
          },
          token: token,
        },
      });
    } catch (error) {
      res.status(400).send(error);
    }
  }
};
