'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments('user_id')
      table.string('email',60).notNullable().unique()
      table.string('username',30).notNullable().unique()
      table.string('password').notNullable()
      table.string('display').notNullable().unique()
      table.timestamps()

    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
