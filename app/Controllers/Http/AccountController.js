'use strict'

const Database = use('Database')

function numberTypeParamValidator(number){
    if (Number.isNaN(parseInt(number))) 
    return{ error: `params: ${number} is not supported, please use number type param instead`}
    
    return{}
}

class AccountController {
    async index () {
        const account = await Database.table('accounts')

        return { status: 200,error: undefined, data:  account}
    }

    async show ({request}) {
        const { id } = request.params

        const validateValue = numberTypeParamValidator(id)

        if (validateValue.error) 
        return {status: 500, error: validateValue.error, data: undefined }

        const account = await Database
            .select('*')
            .from('account')
            .where("account_id",id)
            .first()

        return { status:200,data: account || {}}
    }

    async store({request}) {
        const { username,password,email } = request.body


        const missingKeys = []

        if(!username ) missingKeys.push('username')
        if(!password ) missingKeys.push('password')
        if(!email ) missingKeys.push('email')
        if (missingKeys.length)
            return { status: 422, error: `${missingKeys} is missing.`,data: undefined}


        const account = await Database
            .table('accounts')
            .insert({ username,password,email })
        return { status: 200,error: undefined, data: { username,password,email }}
    }

    async update({request}){
  
        const{ body,params } = request
        const { id } = params
        const { username,password,email } = body
  
        const accountId = await Database
        .table ('accounts')
        .where ({ account_id: id })
        .update ({ username,password,email })
  
        const account = await Database
        .table ('accounts')
        .where ({ account_id: id })
        .first()
  
      return {status: 200 , error: undefined, data: {admin}}
      }
  
      async destroy ({ request }) {
          const { id } =request.params
  
          await Database
            .table('accounts')
            .where({ account_id: id })
            .delete()
          
          return {status: 200 , error: undefined, data: { massage: 'success' }}
      }
   
      
}

module.exports = AccountController
