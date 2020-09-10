'use strict'

/*
|--------------------------------------------------------------------------
| BlueprintSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class BlueprintSeeder {
  async run () {

    const admin = await Factory
    .model('App/Models/Admin')
    .createMany(10)

    const user = await Factory
    .model('App/Models/User')
    .createMany(10)

    
    const admin_score = await Factory
    .model('App/Models/AdminScore')
    .createMany(10)

    
    const user_score = await Factory
    .model('App/Models/UserScore')
    .createMany(10)

    
    const comment = await Factory
    .model('App/Models/Comment')
    .createMany(10)

    const post = await Factory
    .model('App/Models/Post')
    .createMany(10)

  }


}

module.exports = BlueprintSeeder
