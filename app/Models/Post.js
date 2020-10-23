'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class Post extends Model {
    static get primaryKey() {
        return 'post_id'
    }
    static get createdAtColumn() {
        return null
    }
    static get updatedAtColumn() {
        return null
    }
    comments() {
        return this.hasMany('App/Models/Comment')
    }
    userScores() {
        return this.hasMany('App/Models/UserScore')
    }
    assets() {
        return this.hasMany('App/Models/Asset')
    }
    admins() {
        return this.belongsTo('App/Models/Admin')
    }
    adminScore() {
        return this.belongsTo('App/Models/AdminScore')
    }
}

module.exports = Post
