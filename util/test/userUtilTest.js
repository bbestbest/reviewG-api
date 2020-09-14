module.exports = function (UserModel, user_id) {
    return UserModel.create({
      user_id,
      username:'newnew001',
      password:'123456789',
      email:'newcnx@mail.com'
    })
}
  