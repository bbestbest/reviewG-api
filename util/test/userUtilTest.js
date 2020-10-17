module.exports = function (UserModel, user_id) {
    return UserModel.create({
      user_id,
      email:'newcnx@mail.com',
      username:'newnew001',
      password:'123456789',
      display_name:'ItsmeNewCNX'
    }).then((response) => response["$attributes"])
}
