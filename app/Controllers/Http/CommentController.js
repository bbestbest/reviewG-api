'use strict'

const Database = use('Database')

function numberTypeParamValidator(number){
    if (Number.isNaN(parseInt(number))) 
    return{ error: `params: ${number} is not supported, please use number type param instead`}
    
    return{}
}

class CommentController {

    async index () {
        const comment = await Database.table('comments')

        return { status: 200,error: undefined, data:  comment}
    }

    async show ({request}) {
        const { id } = request.params

        const validateValue = numberTypeParamValidator(id)

        if (validateValue.error) 
        return {status: 500, error: validateValue.error, data: undefined }

        const comment = await Database
            .select('*')
            .from('comments')
            .where("comment_id",id)
            .first()

        return { status:200,data: admin || {}}
    }

    async store({request}) {
        const { comment } = request.body


        const missingKeys = []

        if(!comment) missingKeys.push('comment ')
       
        if (missingKeys.length)
            return { status: 422, error: `${missingKeys} is missing.`,data: undefined}


        const comment = await Database
            .table('comments')
            .insert({ comment  })
        return { status: 200,error: undefined, data: { comment  }}
    }

    async update({request}){
  
        const{ body,params } = request
        const { id } = params
        const { comment  } = body
  
        const comment = await Database
        .table ('comments')
        .where ({ comment_id: id })
        .update ({ comment  })
  
        const comment = await Database
        .table ('comments')
        .where ({ comment_id: id })
        .first()
  
      return {status: 200 , error: undefined, data: {comment}}
      }
  
      async destroy ({ request }) {
          const { id } =request.params
  
          await Database
            .table('comments')
            .where({ comment_id: id })
            .delete()
          
          return {status: 200 , error: undefined, data: { massage: 'success' }}
      }

}

module.exports = CommentController
