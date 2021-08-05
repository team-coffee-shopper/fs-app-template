'use strict'
const axios = require('axios')
const {db, models: {User, Wine} } = require('../server/db')
const apiKey = require('../secret')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  const response = (await axios.get(`https://api.spoonacular.com/food/wine/recommendation?apiKey=${apiKey}&wine=merlot&number=20`)).data;
  const wines = response.recommendedWines;
  

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  await Promise.all(wines.map(wine => Wine.create({
    title: wine.title,
    description: wine.description,
    price: wine.price,
    imageUrl: wine.imageUrl,
    averageRating: wine.averageRating,
    ratingCount: wine.ratingCount,
    score: wine.score,
    link: wine.link
  })))

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
