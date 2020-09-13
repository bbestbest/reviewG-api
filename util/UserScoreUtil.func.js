module.exports = function(UserScoreModel) {
    const _withReferences = (references) => {
        const _UserScore = UserScoreModel.query()
            if(references) {
                const extractedReferences = references.split(",")
                extractedReferences.forEach((references) => _UserScore.with(references))
            }
        return _UserScore
    }

    return {
        getAll: (references) => {
            return _withReferences(references).fetch()
        },
        getByID: (user_score_id,references) => {
            return _withReferences(references)
                .where({user_score_id})
                .fetch()
                .then((response) => response.first())
        },
        create: async (attributes , references) => {
            const {user_score_id} = await UserScoreModel.create(attributes)

            return _withReferences(references)
                .where({user_score_id})
                .fetch()
                .then((response) => response.first())
        },
        updateByID: async (user_score_id,attributes,references) => {
            let userScore = await UserScoreModel.find(user_score_id)
            userScore.merge(attributes)
            await userScore.save()

            return _withReferences(references)
                .where({user_score_id})
                .fetch()
                .then((response) => response.first())

        },
        deleteByID: async (user_score_id) => {
            const userScore = await UserScoreModel.find(user_score_id)
            if(userScore !== null) {
                return userScore.delete()
            }
            else {
                return userScore
            }
        }
    }
}