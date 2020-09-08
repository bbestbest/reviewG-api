'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdminScoresSchema extends Schema {
  up () {
    this.create('admin_scores', (table) => {  
      table.increments('admin_score_id')
      table.integer("story",1)
      table.integer("gameplay",1)
      table.integer("performance",1)
      table.integer("graphic",1)
      table.integer("overall",1)
      table.timestamps()
      table.integer("admin_id").unsigned()

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
