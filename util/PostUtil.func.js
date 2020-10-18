module.exports = function(PostModel){
    const _withReferences = (references) => {
        const _Post = PostModel.query()
            if(references){
                const extractedReferences = references.split(",")
                extractedReferences.forEach((references) => _Post.with(references))
            }
        return _Post
    }

    return {
        getAll: (references) => {
            return _withReferences(references).fetch()
        },
        getByID: (post_id, references) => {
            return _withReferences(references)
              .where({ post_id })
              .fetch()
        },
        getByCatagories: (catagories, references) => {
          return _withReferences(references)
            .where({catagories})
            .fetch()
        },
        create: async (attributes, references) => {
            const {post_id} = await PostModel.create(attributes)
            return _withReferences(references)
            .where({post_id})
            .fetch()
        },
        updateView: async(post_id, views, references) => {
          let post = await PostModel.find(post_id)
          views = views + 1
          console.log(views)

          return _withReferences(references)
              .where({post_id})
              .update({views})
        },
        updateByID: async(post_id, attributes, references) =>{
            let post = await PostModel.find(post_id)
            post.merge(attributes)
            await post.save()

            return _withReferences(references)
                .where({post_id})
                .fetch()
        },
        deleteByID: async (catagories, post_id) => {
            const post = await PostModel.find(catagories, post_id)
            if( post !== null) {
                return post.delete()
            }
            else {
                return post
            }
        }
    }
}
