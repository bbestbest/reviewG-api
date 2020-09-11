'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')
class User extends Model {
    static boot () {
        super.boot()
    
        this.addHook('beforeCreate', async (userInstance) => {
            if (userInstance.dirty.password) {
                userInstance.password = await Hash.make(userInstance.dirty.password)
              }
        })
    }
    static get primaryKey() {
        return 'user_id'
    }
    static get createdAtColumn() {
        return null
    }
    static get updatedAtColumn() {
        return null
    }
    userScores() {
        return this.hasMany('App/Models/UserScore')
    }
    comment() {
        return this.hasMany('App/Models/Comment')
    }
}

module.exports = User
