const { DataTypes } = require('sequelize');
const db = require('../db');

const Merchant = db.define(
  'merchant',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { underscored: true }
);

module.exports = Merchant;
