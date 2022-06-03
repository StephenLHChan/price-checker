const { DataTypes } = require('sequelize');
const db = require('../db');

const Price = db.define(
  'price',
  {
    product_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    merchant_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  { underscored: true }
);

module.exports = Price;
