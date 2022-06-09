const Brand = require('./brand');
const Merchant = require('./merchant');
const Price = require('./price');
const Product = require('./product');

Brand.hasMany(Product);
Product.belongsTo(Brand);

Price.belongsTo(Product, { onDelete: 'cascade' });
Price.belongsTo(Merchant, { onDelete: 'cascade' });

module.exports = {
  Brand,
  Merchant,
  Price,
  Product
};
