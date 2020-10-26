'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Admin extends Model {
    // static boot () {
    //     super.boot()

    //     this.addHook('beforeCreate', async (adminInstance) => {
    //         if (adminInstance.dirty.password) {
    //             adminInstance.password = await Hash.make(adminInstance.dirty.password)
    //           }
    //     })
    // }

    static get primaryKey() {
        return 'admin_id'
    }
    static get createdAtColumn() {
        return null
    }
    static get updatedAtColumn() {
        return null
    }
    adminScores() {
        return this.hasMany('App/Models/AdminScore')
    }
    posts() {
        return this.hasMany('App/Models/Post')
    }
}

module.exports = Admin
