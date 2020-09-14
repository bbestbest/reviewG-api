'use strict'

const { test, trait } = use('Test/Suite')('Insert_Test')
const urlUsers = "/api/v1/users"
const UserModel = use('App/Models/User')
const userUtilTest = require('../../util/test/userUtilTest')
const urlAdmins = "/api/v1/admins"
const AdminModel = use('App/Models/Admin')
const adminUtilTest = require('../../util/test/adminUtilTest')
const urlComment = "/api/v1/comments"
const CommentModel = use('App/Models/Comment')
const commentUtilTest = require('../../util/test/commentUtilTest')
const urlUserScores = "/api/v1/user_scores"
const UserScoreModel = use('App/Models/UserScore')
const userScoreUtilTest = require('../../util/test/userScoreUtilTest')
const urlAdminScores = "/api/v1/admin_scores"
const AdminScoreModel = use('App/Models/AdminScore')
const adminScoreUtilTest = require('../../util/test/adminScoreUtilTest')
const urlPosts = "/api/v1/posts"
const PostModel = use('App/Models/Post')
const postUtilTest = require('../../util/test/postUtilTest')

trait("Test/ApiClient");

test('should insert value to user table', async ({ client }) => {
  const user = {
    username: "test001",
    password: "123456789",
    email: "test001@mail.com"
  }

  const response = await client.post(urlUsers).send(user).end()

  response.assertJSONSubset({
    username: "test001",
    email: "test001@mail.com"
  })
})

test('should insert value to admin table', async ({ client }) => {
  // const admin = {
  //     username: "testadmin001",
  //     password: "123456789",
  //     email: "testadmin001@mail.com"
  //   }
  //   let response = await client.post(urlAdmins).send(admin).end()
  //   response = await client.delete(`${urlAdmins}/1`).end()
  const { admin_id } = await adminUtilTest(AdminModel)
  const response = await client.delete(`${urlAdmins}/${admin_id}`).end()
})
test('should insert value to comment table', async ({ client }) => {
  // const comment = {
  //     comment : "comment_test_01"
  //   }
  //   let response = await client.post(urlComment).send(comment).end()
  //   response = await client.delete(`${urlComment}/1`).end()
  const { comment_id } = await commentUtilTest(CommentModel)
  const response = await client.delete(`${urlComment}/${comment_id}`).end()
})
test('should insert value to user score table', async ({ client }) => {
  // const userScore = {
  //     story: "9",
  //     gameplay : "6",
  //     performance : "5",
  //     graphic : "8"
  //   }
  //   const response = await client.post(urlUserScore).send(userScore).end()
  //   await UserScoreModel.find(response.body.data.user_score_id).then((response) =>
  //   response.delete()
  // )
  const { user_score_id } = await userScoreUtilTest(UserScoreModel)
  const response = await client.delete(`${urlUserScores}/${user_score_id}`).end()
})
test('should insert value to admin score table', async ({ client }) => {
  // const adminScore = {
  //     story: "3",
  //     gameplay : "10",
  //     performance : "6",
  //     graphic : "4"
  //   }
  //   const response = await client.post(urlAdminScore).send(adminScore).end()
  //   await AdminScoreModel.find(response.body.data.admin_score_id).then((response) =>
  //   response.delete()
  // )
  const { admin_score_id } = await adminScoreUtilTest(AdminScoreModel)
  const response = await client.delete(`${urlAdminScores}/${admin_score_id}`).end()
})
test('should insert value to post table', async ({ client }) => {
  const { post_id } = await postUtilTest(PostModel)
  const response = await client.delete(`${urlPosts}/${post_id}`).end()
})