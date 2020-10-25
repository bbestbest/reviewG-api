'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentsSchema extends Schema {
  up () {
    this.create('comments', (table) => {
      table.increments('comment_id')
      table.string("comment",255)
      table.timestamp('comment_date').default(this.fn.now())
      table.string("date")
      table.integer("user_id").unsigned()
      table.integer("post_id").unsigned()
      table.timestamps()

      table
        .foreign('user_id')
        .references('users.user_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .foreign('post_id')
        .references('posts.post_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('comments')
  }
}

module.exports = CommentsSchema
