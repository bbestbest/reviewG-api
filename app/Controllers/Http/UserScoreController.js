'use strict'

const ScoreValidator = require('../../../service/UserScoreValidator')

const Database = use('Database')
const UserScore = use('App/Models/UserScore')
const Validator = use('Validator')

function numberTypeParamValidator(number){
    if (Number.isNaN(parseInt(number))) 
    return{ error: `params: ${number} is not supported, please use number type param instead`}
    
    return{}
}

class UserScoreController {

    async index () {
        const user_score = await UserScore
          .query()
          .fetch()

        return { status: 200,error: undefined, data:  user_score}
    }

    async show ({request}) {
        const { id } = request.params

        const validateValue = numberTypeParamValidator(id)

        if (validateValue.error) 
          return {status: 500, error: validateValue.error, data: undefined }

        const userScore = await UserScore
          .query()
          .where("user_score_id",id)
          .first()

        return { status:200,data: admin || {}}
    }

    async store({request}) {
        const { story,gameplay,performance,graphic} = request.body

        const validatedData = await ScoreValidator(request.body)
        
        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }

        const overall = OverAllScore(parseFloat(story),parseFloat(gameplay),parseFloat(performance),parseFloat(graphic))

        const userScore = await UserScore
          .query()
          .insert({ story,gameplay,performance,graphic,overall})
    
        return { status: 200, error: undefined, data: { story,gameplay,performance,graphic,overall } }

    }

    async update({request}){
  
        const { body,params } = request
        const { id } = params
        const { story,gameplay,performance,graphic,overall } = body
  
        const overall = OverAllScore(parseFloat(story),parseFloat(gameplay),parseFloat(performance),parseFloat(graphic))

        const userScoreID = await UserScore
          .where("user_score_id",id)
          .update({ story,gameplay,performance,graphic,overall })
  
        const userScore = await UserScore
          .where("user_score_id",id)
          .first()
  
      return {status: 200 , error: undefined, data: {user_score}}
      }
  
    async destroy ({ request }) {
        const { id } =request.params
  
        const userScore = await Database
          .table('user_score')
          .where({ user_score_id: id })
          .delete()
          return {status: 200 , error: undefined, data: { massage: 'success' }}
      }
   
}

module.exports = UserScoreController
