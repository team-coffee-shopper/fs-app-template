//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User');
const Wine = require('./models/Wine');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');
const Review = require('./models/Review');

//associations could go here!

User.hasMany(Order);
Order.belongsTo(User);

//many to many
Order.belongsToMany(Wine, {through: 'OrderItem'});
Wine.belongsToMany(Order, {through: 'OrderItem'});

//one to many: product to review
Wine.hasMany(Review);
Review.belongsTo(Wine);



module.exports = {
  db,
  models: {
    User,
    Wine,
    Order,
    OrderItem,
    Review
  },
}
