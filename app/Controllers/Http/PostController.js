'use strict'

const PostValidator = require('../../../service/PostValidator')

const Database = use('Database')
const Post = use('App/Models/Post')
const Validator = use('Validator')

function numberTypeParamValidator(number){
    if (Number.isNaN(parseInt(number))) 
    return{ error: `params: ${number} is not supported, please use number type param instead`}
    
    return{}
}

class PostController {

    async index () {
        const post = await Post
            .query()
            .fetch()

        return { status: 200,error: undefined, data:  post}
    }

    async show ({request}) {
        const { id } = request.params

        const validateValue = numberTypeParamValidator(id)

        if (validateValue.error) 
        return {status: 500, error: validateValue.error, data: undefined }

        const post = await Post
            .query()
            .where("post_id",id)
            .first()

        return { status:200,data: post || {}}
    }

    async store({request}) {
        const { topic,body,writer } = request.body

        const validatedData = await PostValidator(request.body)
        

        if (validatedData.error)
          return { status: 422, error: validatedData.error, data: undefined }

        const post = await Post
            .query()
            .insert({topic,body,writer})
    
        return { status: 200, error: undefined, data: { topic,body,writer } }
    }

    async update({request}) {
  
        const{ body,params } = request
        const { id } = params
 
        
  
        const postID = await Post
            .where("post_id",id)
            .update ({topic,body,writer})
  
        const post = await Post
            .where("post_id",id)
            .first()
  
      return {status: 200 , error: undefined, data: {post}}
      }
  
    async destroy ({ request }) {
          const { id } =request.params
  
        const post = await Post
            .query()
            .where({post_id:id})
            .delete()
          
          return {status: 200 , error: undefined, data: { massage: 'success' }}
      }
   
    
}

module.exports = PostController
