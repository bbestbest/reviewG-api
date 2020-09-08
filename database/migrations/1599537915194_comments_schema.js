'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentsSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments('comment_id')
      table.string("comment",255)
      table.timestamp('comment_date').default(this.fn.now())
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
    this.drop('comments')
  }
}

module.exports = CommentsSchema
