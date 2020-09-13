'use strict'

const AdminScoreValidator = require('../../../service/AdminScoreValidator')
const OverAllScore = require('../../../util/OverAllScoreUtil')
const AdminScoreUtil = require('../../../util/AdminScoreUtil.func')
const AdminScoreModel = use('App/Models/AdminScore')
const Validator = use('Validator')
const numberTypeParamValidator = require('../../../util/numberTypeParamValidator.func')

class AdminScoreController {
    async index ({request}) {
      const { references } = request.qs

      const adminscore = await AdminScoreUtil(AdminScoreModel).getAll(references)

      return { status: 200,error: undefined, data:  adminscore}
    }

    async show ({request}) {
      const { id } = request.params
      const { references } = request.qs
      const validateValue = numberTypeParamValidator(id)

      if (validateValue.error) 
        return {status: 500, error: validateValue.error, data: undefined }

      const adminScore = await AdminScoreUtil(AdminScoreModel).getByID(id,references)

      return { status:200,data: adminScore}
    }

    async store({request}) {
      const { story,gameplay,performance,graphic } = request.body
      const { references } = request.qs

      const validatedData = await AdminScoreValidator(request.body)
        
      if (validatedData.error)
        return { status: 422, error: validatedData.error, data: undefined }

      const overall = OverAllScore(parseFloat(story),parseFloat(gameplay),parseFloat(performance),parseFloat(graphic))

      const adminScore = await AdminScoreUtil(AdminScoreModel).create({story,gameplay,performance,graphic,overall},references)
    
      return { status: 200, error: undefined, data: adminScore }

    }

    async update({request}){
  
      const { body,params,qs } = request
      const { id } = params
      const { story,gameplay,performance,graphic} = body
      const { references } = qs

      const overall = OverAllScore(parseFloat(story),parseFloat(gameplay),parseFloat(performance),parseFloat(graphic))

      const adminScore = await AdminScoreUtil(AdminScoreModel).updateByID(id,{story,gameplay,performance,graphic,overall},references)
  
      return {status: 200 , error: undefined, data: adminScore}
      }
  
  async destroy ({ request }) {
    const { params , qs } =request
    const { id } = params
    const { references} = qs

    const adminScore = await AdminScoreUtil(AdminScoreModel).deleteByID(id)
    
    if(adminScore) {
        return {status: 200 , error: undefined, data: { massage: ' success' }}
    }
    else {
        return {status: 200 , error: undefined, data: { massage: ` ${id} not found` }}
    }
      }
}

module.exports = AdminScoreController
