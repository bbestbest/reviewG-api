'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Admin', (faker) => {
  return {
    username: faker.username(),
    password: faker.password(),
    email: faker.email()
  }
})

Factory.blueprint('App/Models/User', (faker) => {
    return {
        username: faker.username(),
        password: faker.password(),
        email: faker.email()
    }
})

Factory.blueprint('App/Models/AdminScore', (faker) => {
    return {
        story: faker.integer({ min: 0, max: 10 }),
        gameplay: faker.integer({ min: 0, max: 10 }),
        performance: faker.integer({ min: 0, max: 10 }),
        graphic: faker.integer({ min: 0, max: 10 })
    }
})

Factory.blueprint('App/Models/UserScore', (faker) => {
    return {
      story: faker.integer({ min: 0, max: 10 }),
      gameplay: faker.integer({ min: 0, max: 10 }),
      performance: faker.integer({ min: 0, max: 10 }),
      graphic: faker.integer({ min: 0, max: 10 })
    }
})

Factory.blueprint('App/Models/Comment', (faker) => {
    return {
      comment: faker.sentence()

    }
})

Factory.blueprint('App/Models/Post', (faker) => {
    return {
      topic: faker.sentence(),
      bodyv1: faker.paragraph({ sentences: 2 }),
      bodyv2: faker.paragraph({ sentences: 2 }),
      bodyv3: faker.paragraph({ sentences: 2 }),
      bodyv4: faker.paragraph({ sentences: 2 }),
      bodyv5: faker.paragraph({ sentences: 2 }),
      writer: faker.name()
    }
})
  