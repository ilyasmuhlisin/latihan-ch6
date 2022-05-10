"use strict";
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class User extends Model {}
  User.init(
    {
      nama: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: (record, options) => {
          record.password = bcrypt.hashSync(record.password, 10);
        },
      },
      sequelize,
    }
  );
  User.associate = function (models) {
    // User.hasMany(models.produk);
  };
  return User;
};
