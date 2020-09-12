'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AdminScore extends Model {
    static get primaryKey() {
        return 'admin_score_id'
    }
    static get createdAtColumn() {
        return null
    }
    static get updatedAtColumn() {
        return null
    }
    admin() {
        return this.belongsTo('App/Models/Admin')
    }
    post() {
        return this.hasOne('App/Models/Post')
    }
}

module.exports = AdminScore
