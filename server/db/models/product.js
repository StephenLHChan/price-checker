const { DataTypes } = require('sequelize');
const db = require('../db');

const Product = db.define(
  'product',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    brand_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    barcode: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  },
  { underscored: true }
);

module.exports = Product;
