'use strict'

const Database = use('Database')

function numberTypeParamValidator(number){
    if (Number.isNaN(parseInt(number))) 
    return{ error: `params: ${number} is not supported, please use number type param instead`}
    
    return{}
}

class UserScoreController {

    async index () {
        const user_score = await Database.table('user_scores')

        return { status: 200,error: undefined, data:  user_score}
    }

    async show ({request}) {
        const { id } = request.params

        const validateValue = numberTypeParamValidator(id)

        if (validateValue.error) 
        return {status: 500, error: validateValue.error, data: undefined }

        const admin = await Database
            .select('*')
            .from('user_scores')
            .where("user_score_id",id)
            .first()

        return { status:200,data: admin || {}}
    }

    async store({request}) {
        const { story,gameplay,performance,graphic,overall } = request.body


        const missingKeys = []

        if(!story ) missingKeys.push('story')
        if(!gameplay ) missingKeys.push('gameplay')
        if(!performance ) missingKeys.push('performance')
        if(!graphic ) missingKeys.push('graphic')
        if(!overall ) missingKeys.push('overall')
        if (missingKeys.length)
            return { status: 422, error: `${missingKeys} is missing.`,data: undefined}


        const user_score = await Database
            .table('user_scores')
            .insert({ story,gameplay,performance,graphic,overall })
        return { status: 200,error: undefined, data: { story,gameplay,performance,graphic,overall }}
    }

    async update({request}){
  
        const{ body,params } = request
        const { id } = params
        const { story,gameplay,performance,graphic,overall } = body
  
        const user_scoreId = await Database
        .table ('user_scores')
        .where ({ user_score_id: id })
        .update ({ story,gameplay,performance,graphic,overall })
  
        const user_score = await Database
        .table ('user_scores')
        .where ({ user_score_id: id })
        .first()
  
      return {status: 200 , error: undefined, data: {user_score}}
      }
  
      async destroy ({ request }) {
          const { id } =request.params
  
          await Database
            .table('user_score')
            .where({ user_score_id: id })
            .delete()
          
          return {status: 200 , error: undefined, data: { massage: 'success' }}
      }
   
}

module.exports = UserScoreController
