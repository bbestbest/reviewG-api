'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AccountsSchema extends Schema {
  up () {
    this.create('accounts', (table) => {
      table.increments('account_id')
      table.string("username",30).notNullable().unique()
      table.string("password").notNullable()
      table.string("email",60).notNullable().unique()
      table.timestamps()

    })
  }

  down () {
    this.drop('accounts')
  }
}

module.exports = AccountsSchema
