const Sequelize = require('sequelize');
const { STRING, DECIMAL, DATE, NOW, BOOLEAN } = Sequelize;
const db = require('../db');

const Order = db.define('order', {
    paymentMethod: {
        type: STRING,
        alowNull: false
    },
    date: {
        type: DATE,
        allowNull: false,
        defaultValue: NOW //or 0 - ask nick/jake Saturday 07/21 class
    },
    total: {
        type: DECIMAL(10, 1),
        allowNull: false,
        validate: {
            notEmpty: true,
            min: 0
        },
        defaultValue: 0
    },
    active: {
        type: BOOLEAN,
        defaultValue: true
    }  
})

module.exports = Order;