'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostsSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments('post_id')
      table.string("topic",150)
      table.string("body",10000)
      table.string("writer",30)
      table.integer("views",255).default(0)
      table.string("catagories",30)
      table.string('date')
      table.timestamp('post_date').default(this.fn.now())
      table.timestamps()
      table.integer("admin_id").unsigned()
      table.integer("admin_score_id").unsigned()

      table
        .foreign('admin_id')
        .references('admins.admin_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .foreign('admin_score_id')
        .references('admin_scores.admin_score_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
