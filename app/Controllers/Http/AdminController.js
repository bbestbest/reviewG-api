'use strict'

const AdminValidator = require("../../../service/AdminValidator")

const Database = use('Database')
const Admin = use('App/Models/Admin')
const Validator = use('Validator')

function numberTypeParamValidator(number){
    if (Number.isNaN(parseInt(number))) 
    return{ error: `params: ${number} is not supported, please use number type param instead`}
    
    return{}
}

class AdminController {

    async index () {
        const admin = await Admin
            .query()
            .fetch()

        return { status: 200,error: undefined, data:  admin}
    }

    async show ({request}) {
        const { id } = request.params

        const validateValue = numberTypeParamValidator(id)

        if (validateValue.error) {
            return {status: 500, error: validateValue.error, data: undefined }
        }

        const admin = await Admin
            .query()
            .where("admin_id",id)
            .first()

        return { status:200,data: admin || {}}
    }

    async store({request}) {
        const { username, email, password } = request.body

        const validatedValue = AdminValidator(request.body)

        if(validatedValue.error) {
            return { status: 500, error: validateValue.error , data: undefined}
        }

        const admin = await Admin
            .query()
            .insert({ username,password,email })
        return { status: 200,error: undefined, data: { username,password,email }}
    }

    async update({request}){
  
        const { body,params } = request
        const { id } = params
        const { username,password,email } = body
  
        const adminID = await Admin
            .query()
            .where ({ admin_id: id })
            .update ({ username,password,email })
  
        const admin = await Database
            .query()
            .where ({ admin_id: id })
            .first()
  
      return {status: 200 , error: undefined, data: {admin}}
      }
  
      async destroy ({ request }) {
          const { id } =request.params
  
          await Admin
            .query()
            .where({ admin_id: id })
            .delete()
          
          return {status: 200 , error: undefined, data: { massage: 'success' }}
      }
   
      
}

module.exports = AdminController
