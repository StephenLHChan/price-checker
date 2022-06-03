const Product = require('./product');
const Price = require('./price');
const Merchant = require('./merchant');

Price.belongsTo(Product, { onDelete: 'cascade' });
Price.belongsTo(Merchant, { onDelete: 'cascade' });

module.exports = {
  Product,
  Price,
  Merchant
};
