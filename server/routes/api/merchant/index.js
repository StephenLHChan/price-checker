const router = require('express').Router();
const { Merchant } = require('../../../db/models');

router.get('/', async (req, res, next) => {
  try {
    const merchants = await Merchant.findAll({
      attributes: ['id', 'name']
    });

    if (!merchants)
      return res.status(400).json({
        error: 'No merchants in system'
      });

    res.json(merchants);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
