'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdminsSchema extends Schema {
  up () {
    this.create('admins', (table) => {
      table.increments('admin_id')
      table.string("email",60).notNullable().unique()
      table.string("username",30).notNullable().unique()
      table.string("password").notNullable()
      table.string("display_name").notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('admins')
  }
}

module.exports = AdminsSchema
