//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User');
const Wine = require('./models/Wine');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');
const Review = require('./models/Review');



Order.belongsTo(User)
User.hasMany(Order)

OrderItem.belongsTo(Order)
Order.hasMany(OrderItem)

Wine.hasMany(OrderItem)
OrderItem.belongsTo(Wine)

Wine.hasMany(Review)
Review.belongsTo(Wine)
Review.belongsTo(User)

// //associations could go here!

// User.hasMany(Order);
// Order.belongsTo(User);

// //many to many
// Order.belongsToMany(Wine, {through: 'OrderItem'});
// Wine.belongsToMany(Order, {through: 'OrderItem'});

// //one to many: product to review
// Wine.hasMany(Review);
// Review.belongsTo(Wine);



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
