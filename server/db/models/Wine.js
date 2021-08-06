const Sequelize = require('sequelize');
const { STRING, DECIMAL } = Sequelize;
const db = require('../db');

const Wine = db.define('wine', {
    title: {
        type: STRING,
        alowNull: false
    },
    description: {
        type: STRING,
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
    }
})

module.exports = Wine;