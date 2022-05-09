"use strict";
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class Produk extends Model {}
  Produk.init(
    {
      nama_produk: DataTypes.STRING,
      harga_produk: DataTypes.INTEGER,
      desc_produk: DataTypes.STRING,
      img_produk: DataTypes.STRING,
      status_produk: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
    },
    {
      sequelize,
    }
  );
  Produk.associate = function (models) {
    Produk.belongsTo(models.user);
  };
  return Produk;
};
