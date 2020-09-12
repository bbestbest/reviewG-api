'use strict'

const AdminValidator = require('../../../service/AdminValidator')
const AdminModel = use('App/Models/Admin')
const AdminUtil = require('../../../util/AdminUtil.func')
const Validator = use('Validator')

function numberTypeParamValidator(number){
    if (Number.isNaN(parseInt(number))) 
    return { error: `params: ${number} is not supported, please use number type param instead`}
    
    return {}
}

class AdminController {

    async index ({request}) {
        const { references } = request.qs
        const admin = await AdminUtil(AdminModel).getAll(references)

        return { status: 200,error: undefined, data:  admin}
    }

    async show ({request}) {
        const { id } = request.params
        const { references } = request.qs

        const validateValue = numberTypeParamValidator(id)
            
        if (validateValue.error) {
            return {status: 500, error: validateValue.error, data: undefined }
        }

        const admin = await AdminUtil(AdminModel).getByID(id,references)

        return { status:200,data: admin || {}}
    }

    async store({request}) {
        const { username, password , email } = request.body
        const { references } = request.qs;

        const validatedValue = await AdminValidator(request.body)

        if(validatedValue.error) 
            return { status: 422, error: validatedValue.error , data: undefined}
        
        const admin = await AdminUtil(AdminModel).create({username,password,email},references)
        
        return { status: 200,error: undefined, data: admin }
    }

    async update({request}){
  
        const { body,params,qs } = request
        const { id } = params
        const { username,password,email } = body
        const { references } = qs
  
        const admin = await AdminUtil(AdminModel).updateByID(id,{username,password,email},references)
  
      return {status: 200 , error: undefined, data: admin}
      }
  
    async destroy ({ request }) {
        const { params , qs } =request
        const { id } = params
        const { references} = qs

        const admin = await AdminUtil(AdminModel).deleteByID(id)
        
        if(admin) {
            return {status: 200 , error: undefined, data: { massage: ' success' }}
        }
        else {
            return {status: 200 , error: undefined, data: { massage: ` ${id} not found` }}
        }
      }
}

module.exports = AdminController
