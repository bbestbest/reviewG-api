module.exports = function(AdminScoreModel) {
    const _withReferences = (references) => {
        const _AdminScore = AdminScoreModel.query()
            if(references) {
                const extractedReferences = references.split(",")
                extractedReferences.forEach((references) => _AdminScore.with(references))
            }
        return _AdminScore
    }

    return {
        getAll: (references) => {
            return _withReferences(references).fetch()
        },
        getByID: (user_score_id,references) => {
            return _withReferences(references)
                .where({user_score_id})
                .fetch()
        },
        create: async (attributes , references) => {
            const {user_score_id} = await UserModel.create(attributes)

            return _withReferences(references)
                .where({user_score_id})
                .fetch()
        },
        updateByID: async (user_score_id,attributes,references) => {
            let userScore = await AdminScoreModel.find(user_score_id)
            userScore.merge(attributes)
            await userScore.save()

            return _withReferences(references)
                .where({user_score_id})
                .fetch()
        },
        deleteByID: async (user_score_id) => {
            const userScore = await AdminScoreModel.find(user_score_id)
            if(user !== null) {
                return userScore.delete()
            }
            else {
                return userScore
            }
        }
    }
}