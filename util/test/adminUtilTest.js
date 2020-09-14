module.exports = function (AdminModel, admin_id) {
    return AdminModel.create({
      admin_id,
      username:'adminnewnew001',
      password:'admin123456789',
      email:'adminnewcnx@mail.com'
    }).then((response) => response["$attributes"])
}
  