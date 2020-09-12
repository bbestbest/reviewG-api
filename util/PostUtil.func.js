module.exports = function(PostModel){
    const _withReferences = (reference) => {
        const _Post = PostModel.quety()
            if(reference){
                const extractedReferences = references.split(",")
                extractedReferences.forEach((references) => _Comment.with(references))
            }
        return _Post
    }

    return {
        getAll: (references) => {
            return _withReferences(references).fetch()
        },
        getByID: (post_id,references) => {
            return _withReferences(references)
                .where({post_id})
                .fetch()
        },
        create: async (attributes,reference) => {
            const {post_id} = await PostModel.create(attributes)

            return _withReferences(reference)
            .fetch()
        },
        updateByID: async(post_id,attributes,references) =>{
            let post = await PostModel.find(post_id)
            post.merge(attributes)
            await post.save()

            return _withReferences(references)
                .where({post_id})
                .fetch()
        },
        deleteByID: async (post_id) => {
            const post = await PostModel.find(post_id)
            if( post !== null) {
                return post.delete()
            }
            else {
                return post
            } 
        }
    }
} 