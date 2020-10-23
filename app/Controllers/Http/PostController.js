'use strict'

const PostValidator = require('../../../service/PostValidator')
const PostUtil = require('../../../util/PostUtil.func')
const PostModel = use('App/Models/Post')
const Validator = use('Validator')
const numberTypeParamValidator = require('../../../util/numberTypeParamValidator.func')
const { post } = require('@adonisjs/framework/src/Route/Manager')
class PostController {

    async index ({request}) {
        const { references } = request.qs
        const post = await PostUtil(PostModel).getAll(references)

        return { status: 200,error: undefined, data:  post}
    }

    async show ({request}) {
        const { catagories, post_id } = request.params
        const { references } = request.qs

        const validateValue = numberTypeParamValidator(post_id)

        if (validateValue.error)
          return {status: 500, error: validateValue.error, data: undefined }

        const post = await PostUtil(PostModel).getByID(post_id, references)

        return { status:200,data: post || {}}
    }

    async showByCatagories({ request }) {
        const { catagories } = request.params
        const { references } = request.qs

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
      const { params, qs } = request
      const { id } = params
      const { topic, body, writer, catagories } = request.body
      const { references } = qs

      const post = await PostUtil(PostModel).updateByID(id, {topic, body, writer, catagories}, references)

      return {status: 200 , error: undefined, data: post}
    }

    async updateViews({request}) {
      const { catagories, post_id } = request.params

      const { views } = await PostModel.find(post_id)

      const countViews = await PostUtil(PostModel).updateView(post_id, views)

      return {status: 200 , error: undefined, data: countViews}
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
