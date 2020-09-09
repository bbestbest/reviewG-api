'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserScoresSchema extends Schema {
  up () {
    this.create('user_scores', (table) => {
      table.increments('user_score_id')
      table.integer("story",2)
      table.integer("gameplay",2)
      table.integer("performance",2)
      table.integer("graphic",2)
      table.integer("overall",2)
      table.timestamps()
      table.integer("account_id").unsigned()

      table
      .foreign('account_id')
      .references('accounts.account_id')
      .onDelete('CASCADE') 
      .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('user_scores')
  }
}

module.exports = UserScoresSchema
