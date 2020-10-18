'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Asset extends Model {
  static get primaryKey() {
    return 'asset_id'
  }
  post() {
    return this.belongsTo('App/Models/Post')
  }
}

module.exports = Asset
