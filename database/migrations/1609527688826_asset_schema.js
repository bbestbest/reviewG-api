'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AssetSchema extends Schema {
  up () {
    this.create('assets', (table) => {
      table.increments('asset_id')
      table.string('asset_path',255)
      table.integer('post_id').unsigned()
      table.timestamps()

      table
        .foreign('post_id')
        .references('posts.post_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('assets')
  }
}

module.exports = AssetSchema
