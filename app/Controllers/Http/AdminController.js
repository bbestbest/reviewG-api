'use strict'

const Database = use('Database')
const Hash = use ('Hash')
const AdminValidator = require('../../../service/Admin_ScoreValidator')

function numberTypeParamValidator(number){
    if (Number.isNaN(parseInt(number))) 
    return{ error: `params: ${number} is not supported, please use number type param instead`}
    
    return{}
}

class AdminController {

    async index () {
        const admin = await Database.table('admins')

        return { status: 200,error: undefined, data:  admin}
    }

    async show ({request}) {
        const { id } = request.params

        const validateValue = numberTypeParamValidator(id)

        if (validateValue.error) 
        return {status: 500, error: validateValue.error, data: undefined }

        const admin = await Database
            .select('*')
            .from('admins')
            .where("admin_id",id)
            .first()

        return { status:200,data: admin || {}}
    }

    async store({request}) {
        const { username, email, password } = request.body

        const validatedData = await AdminValidator(request.body)

    
        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }

        const hashedPassword = await Hash.make(password)

        const admin = await Database
          .table('admins')
          .insert({ username, email, password: hashedPassword })
    
        return { status: 200, error: undefined, data: { username, email } }
    }

    async update({request}){
  
        const{ body,params } = request
        const { id } = params
        const { username,password,email } = body
  
        const adminId = await Database
        .table ('admins')
        .where ({ admin_id: id })
        .update ({ username,password,email })
  
        const admin = await Database
        .table ('admins')
        .where ({ admin_id: id })
        .first()
  
      return {status: 200 , error: undefined, data: {admin}}
      }
  
      async destroy ({ request }) {
          const { id } =request.params
  
          await Database
            .table('admins')
            .where({ admin_id: id })
            .delete()
          
          return {status: 200 , error: undefined, data: { massage: 'success' }}
      }
   
      
}

module.exports = AdminController
