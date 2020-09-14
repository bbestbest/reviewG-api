'use strict'

const { test, trait } = use('Test/Suite')('Update Test')

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

test('should patch a new user data to inserted data', async ({ assert,client }) => {
  const {user_id} = await UserUtilTest(UserModel)

  const userTarget = {
    username:'newnew005',
    password:'200percent',
    email:'newnew@mail.com'
  }

  const userTest = await UserControllerUtil(UserModel).updateByID(user_id,userTarget)

  const response = await client.delete(`${urlUsers}/${user_id}`).end()
  
  assert.isOk(userTest , 'User can not patch')
  
})

test('should patch a new admin data to inserted data', async ({ assert,client }) => {
  const {admin_id} = await AdminUtilTest(AdminModel)

  const adminTarget = {
    username:'adminnewnew005',
    password:'admin200percent',
    email:'adminnewnew@mail.com'
  }

  const adminTest = await AdminControllerUtil(AdminModel).updateByID(admin_id,adminTarget)

  const response = await client.delete(`${urlAdmins}/${admin_id}`).end()
  
  assert.isOk(adminTest , 'Admin can not patch')
  
})

test('should patch a new user score data to inserted data', async ({ assert,client }) => {
  const {user_score_id} = await UserScoreUtilTest(UserScoreModel)

  const userScoreTarget = {
    story:"7",
    gameplay:"2",
    performance:"4",
    graphic:"7"
  }

  const userScoreTest = await UserScoreControllerUtil(UserScoreModel).updateByID(user_score_id,userScoreTarget)

  const response = await client.delete(`${urlUserScores}/${user_score_id}`).end()
  
  assert.isOk(userScoreTest , 'User score can not patch')
  
})

test('should patch a new admin score data to inserted data', async ({ assert,client }) => {
  const {admin_score_id} = await AdminScoreUtilTest(AdminScoreModel)

  const adminScoreTarget = {
    story:"7",
    gameplay:"2",
    performance:"4",
    graphic:"7"
  }

  const adminScoreTest = await AdminScoreControllerUtil(AdminScoreModel).updateByID(admin_score_id,adminScoreTarget)

  const response = await client.delete(`${urlAdminScores}/${admin_score_id}`).end()
  
  assert.isOk(adminScoreTest , 'User score can not patch')
  
})

test('should patch a new comment data to inserted data', async ({ assert,client }) => {
  const {comment_id} = await CommentUtilTest(CommentModel)

  const commentTarget = {
    comment:"The way I see it, if you want the rainbow, you gotta put up with the rain"
  }

  const commentTest = await CommentControllerUtil(CommentModel).updateByID(comment_id,commentTarget)

  const response = await client.delete(`${urlComments}/${comment_id}`).end()
  
  assert.isOk(commentTest , 'Admin can not patch')
  
})

test('should patch a new comment data to inserted data', async ({ assert,client }) => {
  const {post_id} = await PostUtilTest(PostModel)

  const postTarget = {
    topic : "The New Naratip Simulater",
    body : "Simulation of New Naratip V2",
    writer : "New himself V2"
  }

  const postTest = await PostControllerUtil(PostModel).updateByID(post_id,postTarget)

  const response = await client.delete(`${urlPosts}/${post_id}`).end()
  
  assert.isOk(postTest , 'Admin can not patch')
  
})