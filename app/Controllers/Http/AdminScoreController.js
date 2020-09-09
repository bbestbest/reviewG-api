'use strict'

const Database = use('Database')
const AdminScoreValidator = require('../../../service/Admin_ScoreValidator')

function numberTypeParamValidator(number){
    if (Number.isNaN(parseInt(number))) 
    return{ error: `params: ${number} is not supported, please use number type param instead`}
    
    return{}
}

class AdminScoreController {
    async index () {
        const admin_score = await Database.table('admin_scores')

        return { status: 200,error: undefined, data:  admin_score}
    }

    async show ({request}) {
        const { id } = request.params

        const validateValue = numberTypeParamValidator(id)

        if (validateValue.error) 
        return {status: 500, error: validateValue.error, data: undefined }

        const admin = await Database
            .select('*')
            .from('admin_scores')
            .where("admin_score_id",id)
            .first()

        return { status:200,data: admin || {}}
    }

    async store({request}) {
        const { story,gameplay,performance,graphic,overall } = request.body

        const validatedData = await AdminScoreValidator(request.body)
        

        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }

        const admin = await Database
          .table('admin_scores')
          .insert({ story,gameplay,performance,graphic,overall })
    
        return { status: 200, error: undefined, data: { story,gameplay,performance,graphic,overall } }

    }

    async update({request}){
  
        const{ body,params } = request
        const { id } = params
        const { story,gameplay,performance,graphic,overall } = body
  
        const admin_scoreId = await Database
        .table ('admin_scores')
        .where ({ admin_score_id: id })
        .update ({ story,gameplay,performance,graphic,overall })
  
        const admin_score = await Database
        .table ('admin_scores')
        .where ({ admin_score_id: id })
        .first()
  
      return {status: 200 , error: undefined, data: {admin_score}}
      }
  
      async destroy ({ request }) {
          const { id } =request.params
  
          await Database
            .table('admin_scores')
            .where({ admin_score_id: id })
            .delete()
          
          return {status: 200 , error: undefined, data: { massage: 'success' }}
      }
   
    
}

module.exports = AdminScoreController
