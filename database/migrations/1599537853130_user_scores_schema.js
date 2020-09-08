'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserScoresSchema extends Schema {
  up () {
    this.create('user_scores', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_scores')
  }
}

module.exports = UserScoresSchema
