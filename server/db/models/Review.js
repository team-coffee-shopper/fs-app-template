const Sequelize = require('sequelize');
const { STRING, TEXT, INTEGER } = Sequelize;
const db = require('../db');

const Review = db.define('review', {
  title: {
    type: STRING
  },
  content: {
    type: TEXT
  },
  rating: {
    type: INTEGER,
    allowNull: false,
    validate: {
      isInt: true,
      min: 1,
      max: 5
    }
  }
})

module.exports = Review;