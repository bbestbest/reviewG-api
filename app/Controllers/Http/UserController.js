
const UserValidator = require("../../../service/UserValidator")
const UserUtil = require("../../../util/UserUtil.func")
const UserModel = use('App/Models/User')
const Validator = use('Validator')

function numberTypeParamValidator(number){
    if (Number.isNaN(parseInt(number))) 
    return{ error: `params: ${number} is not supported, please use number type param instead`}
    
    return{}
}

class UserController {
    async index ({request}) {
      const { references } = request.qs

      const user = await UserUtil(UserModel).getAll(references)

      return { status: 200,error: undefined, data: user}
    }

    async show ({request}) {
      const { id } = request.params
      const { references } = request.qs

      const validateValue = numberTypeParamValidator(id)

      if (validateValue.error) 
        return {status: 500, error: validateValue.error, data: undefined }

      const user = await UserUtil(UserModel).getByID(id,references)

      return { status:200,data: user}
    }

    async store({request}) {

      const { username, password , email } = request.body
      const { references } = request.qs

      const validatedData = await UserValidator(request.body)

      if (validatedData.error)
        return { status: 422, error: validatedData.error, data: undefined }

      const user = await UserUtil(UserModel).create({username,password,email},references)
          
      return { status: 200, error: undefined, data: user }
    }

    async update({request}) {
  
      const { body,params,qs } = request
      const { id } = params
      const { username,password,email } = body
      const { references } = qs
  
      const user = await UserUtil(UserModel).updateByID({username,password,email},references)
  
      return {status: 200 , error: undefined, data: user}
    }
  
    async destroy ({ request }) {
      const { id } =request.params
      const { references } = request.qs
  
      const user = await UserUtil(UserModel).deleteByID(id)

      if(user) {
        return {status: 200 , error: undefined, data: { massage: ' success' }}
      }
      else {
        return {status: 200 , error: undefined, data: { massage: ` ${id} not found` }}
      }
  }  
}

module.exports = UserController
