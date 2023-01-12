const db = require('./connection');
const { User, Product } = require('../models');

db.once('open', async () => {
  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Ashe Juniper Incense Sticks',
      description:
        'Bamboo sticks hand-rolled in makko powder and cedarwood. Est. burn time is 45 min - 1 hr',
      image: 'Juniper.png',
      price: 5.00,
      quantity: 10
    },
    {
      name: 'Scarlet',
      description:
        'Bamboo sticks hand-rolled in makko powder, agarwood, amber, pine, and sandalwood. Est. burn time is 45 min - 1 hr',
      image: 'Scarlet.png',
      price: 6.00,
      quantity: 10
    },
    {
      name: 'Sandalwood',
      description:
      'Bamboo sticks hand-rolled in makko powder and sandalwood. Est. burn time is 45 min - 1 hr',
      image: 'Sandalwood.png',
      price: 5.00,
      quantity: 10
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Hunter',
    lastName: 'Hundley',
    email: 'hunter.hundley22@gmail.com',
    password: 'password123',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});