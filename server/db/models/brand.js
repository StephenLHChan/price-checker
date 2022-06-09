const { DataTypes } = require('sequelize');
const db = require('../db');

const Brand = db.define(
  'brand',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { underscored: true }
);

module.exports = Brand;
