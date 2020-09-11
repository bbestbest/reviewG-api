'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
class UserScore extends Model {
    static get primaryKey() {
        return 'use_score_id'
    }
    static get createdAtColumn() {
        return null
    }
    static get updatedAtColumn() {
        return null
    }
    user() {
        return this.belongsTo("App/Models/User")
    }
    post() {
        return this.hasOne("App/Models/Post")
    }
}

module.exports = UserScore
