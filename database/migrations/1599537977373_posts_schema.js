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
      table.timestamp('post_date').default(this.fn.now())
      table.timestamps()
      table.integer("admin_id").unsigned().unique()
      table.integer("user_score_id").unsigned().unique()
      table.integer("admin_score_id").unsigned().unique()
      table.integer("comment_id").unsigned().unique()
      table.string("catagories",30)

      table
        .foreign('admin_id')
        .references('admins.admin_id')
        .onDelete('CASCADE') 
        .onUpdate('CASCADE') 
      
      table
        .foreign('user_score_id')
        .references('user_scores.user_score_id')
        .onDelete('CASCADE') 
        .onUpdate('CASCADE') 
      
      table
        .foreign('admin_score_id')
        .references('admin_scores.admin_score_id')
        .onDelete('CASCADE') 
        .onUpdate('CASCADE') 
      
      table
        .foreign('comment_id')
        .references('comments.comment_id')
        .onDelete('CASCADE') 
        .onUpdate('CASCADE') 
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostsSchema
