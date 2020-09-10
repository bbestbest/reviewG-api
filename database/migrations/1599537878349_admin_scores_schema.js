'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdminScoresSchema extends Schema {
  up () {
    this.create('admin_scores', (table) => {  
      table.increments('admin_score_id')
      table.integer("story",2).notNullable()
      table.integer("gameplay",2).notNullable()
      table.integer("performance",2).notNullable()
      table.integer("graphic",2).notNullable()
      table.integer("overall",2)
      table.timestamps()
      table.integer("admin_id").unsigned().notNullable()

      table
      .foreign('admin_id')
      .references('admins.admin_id')
      .onDelete('CASCADE') 
      .onUpdate('CASCADE')

    })
  }

  down () {
    this.drop('admin_scores')
  }
}

module.exports = AdminScoresSchema
