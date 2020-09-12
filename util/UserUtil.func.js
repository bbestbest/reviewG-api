module.exports = function(UserModel) {
    const _withReferences = (references) => {
        const _User = UserModel.query()
            if(references) {
                const extractedReferences = references.split(",")
                extractedReferences.forEach((references) => _User.with(references))
            }
        return _User
    }

    return {
        getAll: (references) => {
            return _withReferences(references).fetch()
        },
        getByID: (user_id,references) => {
            return _withReferences(references)
                .where({user_id})
                .fetch()
                .then((response) => response.first())
        },
        create: async (attributes , references) => {
            const {user_id} = await UserModel.create(attributes)

            return _withReferences(references)
                .where({user_id})
                .fetch()
                .then((response) => response.first())
        },
        updateByID: async (user_id,attributes,references) => {
            let user = await UserModel.find(user_id)
            user.merge(attributes)
            await user.save()

            return _withReferences(references)
                .where({user_id})
                .fetch()
                .then((response) => response.first())
        },
        deleteByID: async (user_id) => {
            const user = await UserModel.find(user_id)
            if(user !== null) {
                return user.delete()
            }
            else {
                return user
            }
        }
    }
}