//usually ecommerce stores have a order line item that 
//would have the products associated with that particular order

//adding a model for that - we can edit it future wise if we go another path

const Sequelize = require('sequelize');
const { INTEGER, DECIMAL, UUID, UUIDV4} = Sequelize;
const db = require('../db');

const OrderItem = db.define('orderItem', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
   price: {
       type: DECIMAL,
       allowNull: false,
       validate: {
           notEmpty: true
       }
   },
   quantity: {
        type: INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        defaultValue: 1 //to make sure quantity doesn't fall to zero
   }
})

module.exports = OrderItem;