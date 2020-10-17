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
        getByID: (admin_score_id,references) => {
            return _withReferences(references)
                .where({admin_score_id})
                .fetch()
                .then((response) => response.first())
        },
        create: async (attributes , references) => {
            const {admin_score_id} = await AdminScoreModel.create(attributes)

            return _withReferences(references)
                .where({admin_score_id})
                .fetch()
                .then((response) => response.first())
        },
        updateByID: async (admin_score_id,attributes,references) => {
            let adminScore = await AdminScoreModel.find(admin_score_id)
            adminScore.merge(attributes)
            await adminScore.save()

            return _withReferences(references)
                .where({admin_score_id})
                .fetch()
                .then((response) => response.first())

        },
        deleteByID: async (admin_score_id) => {
            const adminScore = await AdminScoreModel.find(admin_score_id)
            if(adminScore !== null) {
                return adminScore.delete()
            }
            else {
                return adminScore
            }
        }
    }
}
