'use strict'

const CommentValidator = require('../../../service/CommentValidator')
const CommentUtil = require('../../../util/CommentUtil.func')
const CommentModel = use('App/Models/Comment')
const Validator = use('Validator')
const numberTypeParamValidator = require('../../../util/numberTypeParamValidator.func')

class CommentController {

    async index ({request}) {
        const { references } = request.qs
        const comment = await CommentUtil(CommentModel).getAll(references)

        return { status: 200,error: undefined, data:  comment}
    }

    async show ({request}) {
        const { id } = request.params
        const {references} =request.qs
        const validateValue = numberTypeParamValidator(id)

        if (validateValue.error) 
            return {status: 500, error: validateValue.error, data: undefined }

        const comment = await CommentUtil(CommentModel).getByID(id,references)

        return { status:200,data:  comment || {}}
    }

    async store({request}) {
        const { comment } = request.body
        const {references} = request.qs

        const validatedData = await CommentValidator(request.body)
        
        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }

        await CommentUtil(CommentModel).create({comment},references)
    
        return { status: 200, error: undefined, data:  comment }
    }

    async update({request}) {
  
        const{ body,params } = request
        const { id } = params
        const { comment  } = body
        const {references} = request.qs
  
        await CommentUtil(CommentModel).updateByID(id,{comment},references)
  
      return {status: 200 , error: undefined, data: comment}
      }

    async destroy ({ request }) {
        const { params , qs } =request
        const { id } = params
        const {references} = request.qs

        const comment = await CommentUtil(CommentModel).deleteByID(id)

        if(comment) {
            return {status: 200 , error: undefined, data: { massage: ' success' }}
        }
        else {
            return {status: 200 , error: undefined, data: { massage: ` ${id} not found` }}
        }
      }

}

module.exports = CommentController
