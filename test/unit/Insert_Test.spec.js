'use strict'

const { test , trait } = use('Test/Suite')('Insert_Test')
const urlUsers = "/api/v1/users"
const UserModel = use('App/Models/User')
const urlAdmins = "/api/v1/admins"
const AdminModel = use('App/Models/Admin')
const urlComment = "/api/v1/comments"
const CommentModel = use('App/Models/Comment')
const urlUserScore = "/api/v1/user_scores"
const UserScoreModel = use('App/Models/UserScore')
const urlAdminScore = "/api/v1/admin_scores"
const AdminScoreModel = use('App/Models/AdminScore')
const urlPost = "/api/v1/posts"
const PostModel = use('App/Models/Post')

trait("Test/ApiClient");

test('should insert value to user table', async ({ client }) => {
  const user = {
      username: "test001",
      password: "123456789",
      email: "test001@mail.com"
    }
    const response = await client.post(urlUsers).send(user).end();
  //   await UserModel.find(response.body.data.user_id).then((response) =>
  //   response.delete()
  // )
})
test('should insert value to admin table', async ({ client }) => {
  const admin = {
      username: "testadmin001",
      password: "123456789",
      email: "testadmin001@mail.com"
    }
    const response = await client.post(urlAdmins).send(admin).end();
  //   await AdminModel.find(response.body.data.admin_id).then((response) =>
  //   response.delete()
  // )
})
test('should insert value to comment table', async ({ client }) => {
  const comment = {
      comment : "comment_test_01"
    }
    const response = await client.post(urlComment).send(comment).end();
  //   await AdminModel.find(response.body.data.admin_id).then((response) =>
  //   response.delete()
  // )
})
test('should insert value to user score table', async ({ client }) => {
  const userScore = {
      story: "9",
      gameplay : "6",
      performance : "5",
      graphic : "8"
    }
    const response = await client.post(urlUserScore).send(userScore).end();
  //   await AdminModel.find(response.body.data.admin_id).then((response) =>
  //   response.delete()
  // )
})
test('should insert value to admin score table', async ({ client }) => {
  const adminScore = {
      story: "3",
      gameplay : "10",
      performance : "6",
      graphic : "4"
    }
    const response = await client.post(urlAdminScore).send(adminScore).end();
  //   await AdminModel.find(response.body.data.admin_id).then((response) =>
  //   response.delete()
  // )
})
test('should insert value to post table', async ({ client }) => {
  const post = {
      topic : "NewNaratip Game++",
      body : "New New New",
      writter : "New"
    }
    const response = await client.post(urlPost).send(post).end();
  //   await AdminModel.find(response.body.data.admin_id).then((response) =>
  //   response.delete()
  // )
})