const router = require('express').Router();
const { Product, Price, Merchant } = require('../../../db/models');

router.post('/', async (req, res, next) => {
  try {
    const { product_id, merchant_id, price } = req.body;
    if (!product_id)
      return res.status(400).json({
        error: 'Missing Product Id'
      });

    if (!merchant_id)
      return res.status(400).json({
        error: 'Missing Merchant Id'
      });

    if (!price)
      return res.status(400).json({
        error: 'Missing price'
      });

    if (typeof price !== 'number')
      return res.status(400).json({
        error: 'Wrong data format (price)'
      });

    const product = await Product.findOne({
      where: {
        id: product_id
      }
    });

    if (!product)
      return res.status(404).json({
        error: 'No such product'
      });

    const merchant = await Merchant.findOne({
      where: {
        id: merchant_id
      }
    });

    if (!merchant)
      return res.status(404).json({
        error: 'No such merchant'
      });

    const priceRecord = await Price.create({ product_id, merchant_id, price });

    return res.json({ product, merchant, priceRecord });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
