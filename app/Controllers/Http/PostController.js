'use strict'

const PostValidator = require('../../../service/PostValidator')
const PostUtil = require('../../../util/PostUtil.func')
const PostModel = use('App/Models/Post')
const Validator = use('Validator')
const numberTypeParamValidator = require('../../../util/numberTypeParamValidator.func')

class PostController {

    async index ({request}) {
        const { references } = request.qs
        const post = await PostUtil(PostModel).getAll(references)

        return { status: 200,error: undefined, data:  post}
    }

    async show ({request}) {
        const { catagories, id } = request.params
        const { references } = request.qs

        // const validateValue = numberTypeParamValidator(id)

        // if (validateValue.error)
        //   return {status: 500, error: validateValue.error, data: undefined }

        const post = await PostUtil(PostModel).getByID(catagories, id, references)

        return { status:200,data: post || {}}
    }

    async showByCatagories({ request }) {
        const { catagories } = request.params
        const { references } = request.qs

        // switch(catagoriesId) {
        //   case '1':
        //     catagories = 'Action'
        //     break;
        //   case '2':
        //     catagories = 'Adventure'
        //     break;
        //   case '3':
        //     catagories = 'RPG'
        //     break;
        //   case '4':
        //     catagories = 'Simulation'
        //     break;
        //   case '5':
        //     catagories = 'Strategy'
        //     break;
        //   case '6':
        //     catagories = 'Sport'
        //     break;
        //   return catagories
        // }

        // const validateValue = numberTypeParamValidator(catagories)

        // if(validateValue.error)
        //   return { status: 500, error: validateValue.error, data: undefined }

        const post = await PostUtil(PostModel).getByCatagories(catagories, references)

        return { status: 200, data: post || {}}
    }

    async store({request}) {
        const { topic, body, writer, catagories } = request.body
        const {references} = request.qs

        const validatedData = await PostValidator(request.body)


        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }

        const post = await PostUtil(PostModel).create({topic,body,writer},references)

        return { status: 200, error: undefined, data:  post  }
    }

    async update({request}) {

        const{ params, qs } = request
        const { catagoriesType, id } = params
        const { topic, body, writer, catagories } = request.body
        const { references } = qs
        const post = await PostUtil(PostModel).updateByID(id,{topic, body, writer, catagories},references)

      return {status: 200 , error: undefined, data: post}
      }

    async destroy ({ request }) {
        const { params , qs } = request
        const { catagories, id } = params
        const { references } = qs

        const post = await PostUtil(PostModel).deleteByID(catagories,id)

        if(post) {
            return {status: 200 , error: undefined, data: { massage: ' success' }}
        }
        else {
            return {status: 200 , error: undefined, data: { massage: ` ${catagories,id} not found` }}
        }
      }


}

module.exports = PostController
