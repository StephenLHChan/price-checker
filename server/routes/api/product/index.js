const router = require('express').Router();
const { Product, Price, Merchant } = require('../../../db/models');

router.get('/', async (req, res, next) => {
  try {
    const { barcode } = req.query;

    if (!barcode) {
      return res.status(400).json({
        error: 'Missing parameter (barcode)'
      });
    }

    const product = await Product.findOne({
      where: {
        barcode: barcode
      }
    });

    if (!product) {
      return res.status(404).json({ error: 'Not Found (product)' });
    }

    const priceRecord = await Price.findOne({
      where: {
        price: await Price.min('price', { where: { product_id: product.id } })
      }
    });

    if (!priceRecord) {
      return res.status(400).json({ error: 'Not Found (price record)' });
    }

    const merchant = await Merchant.findOne({
      where: {
        id: priceRecord.merchant_id
      }
    });

    if (!merchant) {
      return res.status(400).json({ error: 'Not Found (merchant)' });
    }

    const result = {
      productId: product.id,
      name: product.name,
      barcode: barcode,
      price: '$ ' + priceRecord.price,
      date: priceRecord.createdAt.toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      merchant: merchant.name
    };

    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
