'use strict'

const ScoreValidator = require('../../../service/UserScoreValidator')
const OverAllScore = require('../../../util/OverAllScoreUtil')
const UserScoreUtil = require('../../../util/UserScoreUtil.func')
const UserScoreModel = use('App/Models/UserScore')
const numberTypeParamValidator = require('../../../util/numberTypeParamValidator.func')

const Validator = use('Validator')
const Database = use('Database')


class UserScoreController {

    async index ({request}) {
      const { references } = request.qs
      const userscore = await UserScoreUtil(UserScoreModel).getAll(references)

        return { status: 200,error: undefined, data:  userscore}
    }

    async show ({request}) {
      const { id } = request.params
      const { references } = request.qs
      const validateValue = numberTypeParamValidator(id)
          
      if (validateValue.error) {
          return {status: 500, error: validateValue.error, data: undefined }
      }

      const userscore = await UserScoreUtil(UserScoreModel).getByID(id,references)

      return { status:200,data: userscore || {}}
    }

    async store({request}) {
        const { story,gameplay,performance,graphic} = request.body
        const { references } = request.qs

        const validatedData = await ScoreValidator(request.body)
        
        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }

        const overall = OverAllScore(parseFloat(story),parseFloat(gameplay),parseFloat(performance),parseFloat(graphic))

        const userScore = await UserScoreUtil(UserScoreModel).create({story,gameplay,performance,graphic,overall},references)
    
        return { status: 200, error: undefined, data: userScore }

    }

    async update({request}){
  
      const { body,params,qs } = request
      const { id } = params
      const { story,gameplay,performance,graphic} = body
      const { references } = qs

      const overall = OverAllScore(parseFloat(story),parseFloat(gameplay),parseFloat(performance),parseFloat(graphic))

      const userScore = await UserScoreUtil(UserScoreModel).updateByID(id,{story,gameplay,performance,graphic,overall},references)
  
      return {status: 200 , error: undefined, data: userScore}
      }
  
    async destroy ({ request }) {
      const { params , qs } =request
      const { id } = params
      const { references} = qs
  
      const userScore = await UserScoreUtil(UserScoreModel).deleteByID(id)
      
      if(userScore) {
          return {status: 200 , error: undefined, data: { massage: ' success' }}
      }
      else {
          return {status: 200 , error: undefined, data: { massage: ` ${id} not found` }}
      }
      }
}

module.exports = UserScoreController
