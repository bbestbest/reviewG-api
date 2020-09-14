module.exports = function(AdminModel) {
    const _withReferences = (references) => {
        const _Admin = AdminModel.query()
            if(references) {
                const extractedReferences = references.split(",")
                extractedReferences.forEach((references) => _Admin.with(references))
            }
        return _Admin
    }

    return {
        getAll: (references) => {
            return _withReferences(references).fetch()
        },
        getByID: (admin_id,references) => {
            return _withReferences(references)
                .where({admin_id})
                .fetch()
                .then((response) => response.first())
        },
        create: async (attributes , references) => {
            const {admin_id} = await AdminModel.create(attributes)
            return _withReferences(references)
                .where({admin_id})
                .fetch()
                .then((response) => response.first())
        },
        updateByID: async (admin_id,attributes,references) => {
            let admin = await AdminModel.find(admin_id)
            admin.merge(attributes)
            await admin.save()

            return _withReferences(references)
                .where({admin_id})
                .fetch()
                .then((response) => response.first())
        },
        deleteByID: async (admin_id) => {
            const admin = await AdminModel.find(admin_id)
            if(admin !== null) {
                return admin.delete()
            }
            else {
                return admin
            }
        }
    }
}