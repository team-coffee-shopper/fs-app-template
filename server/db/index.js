//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User');
const Wine = require('./models/Wine');

//associations could go here!

// User.hasMany(Order);
// Order.belongsTo(User);

// //many to many
// Order.belongsToMany(Product, {through: OrderItem});
// Product.belongsToMany(Order, {through: OrderItem});

// //one to many: product to review
// Product.hasMany(Review);
// Review.belongsTo(Product);

User.hasMany(Cart)
Cart.belongsTo(User)

Cart.hasMany(Order)
Order.belongsTo(Cart)

Product.hasMany(Order)
Order.belongsTo(Product)

Product.hasMany(Review);
Review.belongsTo(Product);

module.exports = {
  db,
  models: {
    User,
    Wine
  },
}
