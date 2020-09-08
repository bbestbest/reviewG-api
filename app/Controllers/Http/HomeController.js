'use strict'

const Database = use("Database")

class HomeController {

    home({view}) {
        return view.render("/home")
    }
    
}

module.exports = HomeController
