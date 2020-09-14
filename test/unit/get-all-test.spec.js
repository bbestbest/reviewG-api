'use strict'

const { test , trait } = use('Test/Suite')('Get All Test')

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

const urlComments = "/api/v1/comments"
const CommentModel = use('App/Models/Comment')
const CommentUtilTest = require('../../util/test/CommentUtilTest')
const CommentControllerUtil = require('../../util/CommentUtil.func')

const urlPosts = "/api/v1/posts"
const PostModel = use('App/Models/Post')
const PostUtilTest = require('../../util/test/PostUtilTest')
const PostControllerUtil = require('../../util/PostUtil.func')

trait("Test/ApiClient");

test('should return user data from database', async ({ assert,client }) => {
  const {user_id} = await UserUtilTest(UserModel)

  const userTest = await UserControllerUtil(UserModel).getAll()

  const response = await client.delete(`${urlUsers}/${user_id}`).end()

  assert.isOk(userTest , 'Can not get all User')
  
  response.assertStatus(200)
})

test('should return admin data from database', async ({ assert,client }) => {
  const {admin_id} = await AdminUtilTest(AdminModel)

  const adminTest = await AdminControllerUtil(AdminModel).getAll()

  const response = await client.delete(`${urlAdmins}/${admin_id}`).end()

  assert.isOk(adminTest , 'Can not get all Admin')
  
  response.assertStatus(200)
})

test('should return user score data from database', async ({ assert,client }) => {
  const {user_score_id} = await UserScoreUtilTest(UserScoreModel)

  const userScoreTest = await UserScoreControllerUtil(UserScoreModel).getAll()

  const response = await client.delete(`${urlUserScores}/${user_score_id}`).end()

  assert.isOk(userScoreTest , 'Can not get all User Score')
  
  response.assertStatus(200)

})

test('should return admin score data from database', async ({ assert,client }) => {
  const {admin_score_id} = await AdminScoreUtilTest(AdminScoreModel)

  const adminScoreTest = await AdminScoreControllerUtil(AdminScoreModel).getAll()

  const response = await client.delete(`${urlAdminScores}/${admin_score_id}`).end()

  assert.isOk(adminScoreTest , 'Can not get all Admin Score')

  response.assertStatus(200)

})

test('should return comment data from database', async ({ assert,client }) => {
  const {comment_id} = await CommentUtilTest(CommentModel)

  const commentTest = await CommentControllerUtil(CommentModel).getAll()

  const response = await client.delete(`${urlComments}/${comment_id}`).end()

  assert.isOk(commentTest , 'Can not get all Comment')
  
  response.assertStatus(200)
})

test('should return post data from database', async ({ assert,client }) => {
  const {post_id} = await PostUtilTest(PostModel)

  const postTest = await PostControllerUtil(PostModel).getAll()

  const response = await client.delete(`${urlPosts}/${post_id}`).end()

  assert.isOk(postTest , 'Can not get all Post')
  
  response.assertStatus(200)
})