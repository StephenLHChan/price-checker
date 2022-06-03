const router = require('express').Router();
const { Product, Price, Merchant } = require('../../../db/models');

router.get('/', async (req, res, next) => {
  try {
    const { barcode } = req.query;

    if (!barcode) {
      return res.status(400).json({
        error: 'barcode parameter is required'
      });
    }

    const product = await Product.findOne({
      where: {
        barcode: barcode
      }
    });

    if (!product) {
      return res.status(400).json({ error: 'Product Not Found' });
    }

    const priceRecord = await Price.findOne({
      where: {
        price: await Price.min('price', {where: {product_id: product.id}})
      }
    });

    if (!priceRecord) {
      return res.status(400).json({ error: 'Price record Not Found' });
    }

    const merchant = await Merchant.findOne({
      where: {
        id: priceRecord.merchant_id
      }
    });

    if (!merchant) {
      return res.status(400).json({ error: 'Price record Not Found' });
    }

    const result = {
      name: product.name,
      barcode: barcode,
      price: priceRecord.price,
      merchant: merchant.name
    };

    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
