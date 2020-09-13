module.exports = function(CommentModel) {
    const _withReferences = (references) => {
        const _Comment = CommentModel.query()
            if(references) {
                const extractedReferences = references.split(",")
                extractedReferences.forEach((references) => _Comment.with(references))
            }
        return _Comment
    }

    return {
        getAll: (references) => {
            return _withReferences(references).fetch()
        },
        getByID: (comment_id,references) => {
            return _withReferences(references)
                .where({comment_id})
                .fetch()
        },
        create: async (attributes , references) => {
            const {comment_id} = await CommentModel.create(attributes)

            return _withReferences(references)
                .where({comment_id})
                .fetch()
        },
        updateByID: async (comment_id,attributes,references) => {
            let comment = await CommentModel.find(comment_id)
            comment.merge(attributes)
            await comment.save()

            return _withReferences(references)
                .where({comment_id})
                .fetch()
        },
        deleteByID: async (comment_id) => {
            const comment = await CommentModel.find(comment_id)
            if( comment !== null) {
                return comment.delete()
            }
            else {
                return comment
            }
        }
    }
}