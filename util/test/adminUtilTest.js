module.exports = function (AdminModel, admin_id) {
    return AdminModel.create({
      admin_id,
      email:'adminnewcnx@mail.com',
      username:'adminnewnew001',
      password:'admin123456789',
      display_name: 'adminnew'
    }).then((response) => response["$attributes"])
}
