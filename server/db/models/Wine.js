const Sequelize = require('sequelize');
const { STRING, DECIMAL, TEXT, INTEGER } = Sequelize;
const db = require('../db');

const Wine = db.define('wine', {
    title: {
        type: STRING,
        alowNull: false
    },
    description: {
        type: TEXT,
        alowNull: false
    },
    price: {
        type: STRING,
        alowNull: false
    },
    imageUrl: {
        type: STRING,
    },
    averageRating: {
        type: DECIMAL
    },
    ratingCount: {
        type: DECIMAL
    },
    score: {
        type: DECIMAL
    },
    link: {
        type: STRING
    },
    stock: {
        type: INTEGER
    }
})

module.exports = Wine;