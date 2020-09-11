
const UserValidator = require("../../../service/UserValidator")

const Database = use('Database')
const User = use('App/Models/User')
const Validator = use('Validator')

function numberTypeParamValidator(number){
    if (Number.isNaN(parseInt(number))) 
    return{ error: `params: ${number} is not supported, please use number type param instead`}
    
    return{}
}

class UserController {
    async index () {
        const user = await User
          .query()
          .fetch()

        return { status: 200,error: undefined, data:  user}
    }

    async show ({request}) {
        const { id } = request.params

        const validateValue = numberTypeParamValidator(id)

        if (validateValue.error) 
          return {status: 500, error: validateValue.error, data: undefined }

        const user = await User
            .query()
            .where("user_id",id)
            .first()

        return { status:200,data: account || {}}
    }

    async store({request}) {

        const { username, password , email } = request.body

        const validatedData = await UserValidator(request.body)

        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }

        const user = await User
          .query()
          .insert({ username, password , email})
        return { status: 200, error: undefined, data: { username, email } }

    }

    async update({request}){
  
        const { body,params } = request
        const { id } = params
        const { username,password,email } = body
  
        const userID = await User
          .query()
          .where("user_id",id)
          .update ({ username,password,email })
  
        const user = await User
          .where("user_id",id)
          .first()
  
      return {status: 200 , error: undefined, data: {admin}}
      }
  
    async destroy ({ request }) {
        const { id } =request.params
  
        const user = await User
          .query()
          .where("user_id",id)
          .detete()

          return {status: 200 , error: undefined, data: { massage: 'success' }}
      }
   
      
}

module.exports = UserController
