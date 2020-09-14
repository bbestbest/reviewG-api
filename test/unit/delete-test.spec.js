'use strict'

const { test, trait } = use('Test/Suite')('Delete Test')

const urlUsers = "/api/v1/users"
const UserModel = use('App/Models/User')
const UserUtilTest = require('../../util/test/userUtilTest')
const UserControllerUtil = require('../../util/UserUtil.func')

const urlAdmins = "/api/v1/admins"
const AdminModel = use('App/Models/Admin')
const AdminUtilTest = require('../../util/test/adminUtilTest')
const AdminControllerUtil = require('../../util/AdminUtil.func')

const urlUserScores = "/api/v1/user_scores"
const UserScoreModel = use('App/Models/UserScore')
const UserScoreUtilTest = require('../../util/test/userScoreUtilTest')
const UserScoreControllerUtil = require('../../util/UserScoreUtil.func')

const urlAdminScores = "/api/v1/admin_scores"
const AdminScoreModel = use('App/Models/AdminScore')
const AdminScoreUtilTest = require('../../util/test/adminScoreUtilTest')
const AdminScoreControllerUtil = require('../../util/AdminScoreUtil.func')

const urlComment = "/api/v1/comments"
const CommentModel = use('App/Models/Comment')
const CommentUtilTest = require('../../util/test/CommentUtilTest')
const CommentControllerUtil = require('../../util/CommentUtil.func')

const urlPosts = "/api/v1/posts"
const PostModel = use('App/Models/Post')
const PostUtilTest = require('../../util/test/PostUtilTest')
const PostControllerUtil = require('../../util/PostUtil.func')

trait("Test/ApiClient");

test('should delete data after insert data to user table', async ({ assert,client }) => {
  const user = await UserUtilTest(UserModel)

  // const response = await client.post(urlUsers).send(user).end()

  const userTest = await UserControllerUtil(UserModel).deleteByID(user.user_id)

  assert.isOk(userTest , 'User can not deleted')

  // response.assertStatus(200)
})
test('should delete data after insert data to admin table', async ({ assert,client }) => {
  const admin = await AdminUtilTest(AdminModel)

  // const response = await client.post(urlAdmins).send(admin).end()

  const adminTest = await AdminControllerUtil(AdminModel).deleteByID(admin.admin_id)

  assert.isOk(adminTest , 'Admin can not deleted')

  // response.assertStatus(200)
})
test('should delete data after insert data to user score table', async ({ assert,client }) => {
  const userScore = await UserScoreUtilTest(UserScoreModel)

  // const response = await client.post(urlUserScores).send(userScore).end()

  const userScoreTest = await UserControllerUtil(UserScoreModel).deleteByID(userScore.user_score_id)

  // assert.equal(userScoreTest, null , 'User score can not deleted')

  assert.isOk(userScoreTest , 'User score can not deleted')

  // response.assertStatus(200)
})
test('should delete data after insert data to admin score table', async ({ assert,client }) => {
  const adminScore = await AdminScoreUtilTest(AdminScoreModel)

  // const response = await client.post(urlAdminScores).send(adminScore).end()

  const adminScoreTest = await AdminControllerUtil(AdminScoreModel).deleteByID(adminScore.admin_score_id)

  // assert.equal(adminScoreTest, null , 'Admin score can not deleted')

  assert.isOk(adminScoreTest, 'Admin score can not delete')
  
  // response.assertStatus(200)
})
test('should delete data after insert data to comment table', async ({ assert,client }) => {
  const comment = await CommentUtilTest(CommentModel)

  // const response = await client.post(urlComment).send(comment).end()

  const commentTest = await CommentControllerUtil(CommentModel).deleteByID(comment.comment_id)

  assert.isOk(commentTest , 'Comment can not delete')

  // response.assertStatus(200)
})
test('should delete data after insert data to post table', async ({ assert,client }) => {
  const post = await PostUtilTest(PostModel)

  // const response = await client.post(urlPosts).send(post).end()

  const postTest = await PostControllerUtil(PostModel).deleteByID(post.post_id)

  console.log(postTest)

  assert.isOk(postTest , 'Post can not deleted')

  // response.assertStatus(200)
})