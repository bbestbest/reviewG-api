'use strict'

const { test, trait } = use('Test/Suite')('Insert Test')

const urlUsers = "/api/v1/users"
const UserModel = use('App/Models/User')
const UserUtilTest = require('../../util/test/userUtilTest')

const urlAdmins = "/api/v1/admins"
const AdminModel = use('App/Models/Admin')
const AdminUtilTest = require('../../util/test/adminUtilTest')

const urlComments = "/api/v1/comments"
const CommentModel = use('App/Models/Comment')
const CommentUtilTest = require('../../util/test/commentUtilTest')

const urlUserScores = "/api/v1/user_scores"
const UserScoreModel = use('App/Models/UserScore')
const UserScoreUtilTest = require('../../util/test/userScoreUtilTest')

const urlAdminScores = "/api/v1/admin_scores"
const AdminScoreModel = use('App/Models/AdminScore')
const AdminScoreUtilTest = require('../../util/test/adminScoreUtilTest')

const urlPosts = "/api/v1/posts"
const PostModel = use('App/Models/Post')
const PostUtilTest = require('../../util/test/postUtilTest')

trait("Test/ApiClient");

test('should insert value to user table', async ({ client }) => {
  const {user_id} = await UserUtilTest(UserModel)

  // let response = await client.post(urlUsers).send({user_id}).end()
  
  // response.assertJSONSubset({
    //   data : {username : "test001",
    //   email: "test001@mail.com"}
    // })

  const response = await client.delete(`${urlUsers}/${user_id}`).end()
  
  response.assertStatus(200)
})

test('should insert value to admin table', async ({ client }) => {
  const {admin_id} = await AdminUtilTest(AdminModel)

  const response = await client.delete(`${urlAdmins}/${admin_id}`).end()

  // const response = await client.post(urlAdmins).send(admin).end()

  response.assertStatus(200)
  // response.assertJSONSubset({
  //   data : {username : "test001",
  //   email: "test001@mail.com"}
  // })
})
test('should insert value to user score table', async ({ client }) => {
  const {user_score_id} = await UserScoreUtilTest(UserScoreModel)

  const response = await client.delete(`${urlUserScores}/${user_score_id}`).end()

  response.assertStatus(200)
})

test('should insert value to admin score table', async ({ client }) => {
  const {admin_score_id} = await AdminScoreUtilTest(AdminScoreModel)

  const response = await client.delete(`${urlAdminScores}/${admin_score_id}`).end()

  response.assertStatus(200)
})

test('should insert value to comment table', async ({ client }) => {
  const {comment_id} = await CommentUtilTest(CommentModel)

  const response = await client.delete(`${urlComments}/${comment_id}`).end()

  response.assertStatus(200)
})
test('should insert value to post table', async ({ client }) => {
  const {post_id} = await PostUtilTest(PostModel)

  const response = await client.delete(`${urlPosts}/${post_id}`).end()

  response.assertStatus(200)
})