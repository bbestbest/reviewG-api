'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdminScoresSchema extends Schema {
  up () {
    this.create('admin_scores', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('admin_scores')
  }
}

module.exports = AdminScoresSchema
