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
      email: faker.email(),
      username: faker.username(),
      password: faker.password(),
      display_name: faker.name()
  }
})

Factory.blueprint('App/Models/User', (faker) => {
    return {
        email: faker.email(),
        username: faker.username(),
        password: faker.password(),
        display_name: faker.name()
    }
})

Factory.blueprint('App/Models/AdminScore', (faker) => {
  const story = faker.integer({ min:0,max:10 })
  const gameplay = faker.integer({ min:0,max:10 })
  const performance = faker.integer({ min:0,max:10 })
  const graphic = faker.integer({ min:0,max:10 })

    return {
        story, gameplay, performance, graphic,
        overall:  ( story+gameplay+performance+graphic )/4
    }
})

Factory.blueprint('App/Models/UserScore', (faker) => {
  const story = faker.integer({ min: 0, max: 10 })
  const gameplay = faker.integer({ min: 0, max: 10 })
  const performance = faker.integer({ min: 0, max: 10 })
  const graphic = faker.integer({ min: 0, max: 10 })
    return {
      story ,gameplay,performance,graphic,
      overall: (story+gameplay+performance+graphic)/4

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
      body: faker.paragraph(),
      writer: faker.name(),
      catagories: "Action"
    }
})
