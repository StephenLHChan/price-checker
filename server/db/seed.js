const db = require('./db');
const { Product, Price, Merchant, Brand } = require('./models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const silk = await Brand.create({
    name: 'Silk'
  });

  const tropicana = await Brand.create({
    name: 'Tropicana'
  });

  const soyMilk = await Product.create({
    name: 'Silk Organic Soy Beverage, Unsweetened Original, Dairy-Free, 1.89L',
    brand_id: silk.id,
    barcode: '2529300073'
  });

  const walmart = await Merchant.create({
    name: 'Walmart'
  });

  const soyMilkprice_1 = await Price.create({
    product_id: soyMilk.id,
    merchant_id: walmart.id,
    price: 4.27
  });

  const soyMilkprice_2 = await Price.create({
    product_id: soyMilk.id,
    merchant_id: walmart.id,
    price: 3.5
  });

  const orangeJuice = await Product.create({
    name: 'Tropicana Orange Juice - No Pulp, 1.54 L Bottle',
    brand_id: tropicana.id,
    barcode: '4850020354'
  });

  const orangeJuicePrice = await Price.create({
    product_id: orangeJuice.id,
    merchant_id: walmart.id,
    price: 3
  });
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}
