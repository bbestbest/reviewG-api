'use strict'

const { test, trait } = use('Test/Suite')('Insert Test')
const urlUsers = "/api/v1/users"
const UserModel = use('App/Models/User')
// const userUtilTest = require('../../util/test/userUtilTest')
const urlAdmins = "/api/v1/admins"
const AdminModel = use('App/Models/Admin')
// const adminUtilTest = require('../../util/test/adminUtilTest')
const urlComment = "/api/v1/comments"
const CommentModel = use('App/Models/Comment')
// const commentUtilTest = require('../../util/test/commentUtilTest')
const urlUserScores = "/api/v1/user_scores"
const UserScoreModel = use('App/Models/UserScore')
// const userScoreUtilTest = require('../../util/test/userScoreUtilTest')
const urlAdminScores = "/api/v1/admin_scores"
const AdminScoreModel = use('App/Models/AdminScore')
// const adminScoreUtilTest = require('../../util/test/adminScoreUtilTest')
const urlPosts = "/api/v1/posts"
const PostModel = use('App/Models/Post')
// const postUtilTest = require('../../util/test/postUtilTest')

trait("Test/ApiClient");

test('should insert value to user table', async ({ client }) => {
  const user = {
    username: "test001",
    password: "123456789",
    email: "test001@mail.com"
  }

  const response = await client.post(urlUsers).send(user).end()
  
  response.assertStatus(200)
  response.assertJSONSubset({
    data : {username : "test001",
    email: "test001@mail.com"}
  })
})

test('should insert value to admin table', async ({ client }) => {
  const admin = {
    username: "test001",
    password: "123456789",
    email: "test001@mail.com"
  }

  const response = await client.post(urlAdmins).send(admin).end()
  
  response.assertStatus(200)
  response.assertJSONSubset({
    data : {username : "test001",
    email: "test001@mail.com"}
  })
})
test('should insert value to user score table', async ({ client }) => {
  const userScore = {
    story:"3",
    gameplay:"10",
    performance:"6",
    graphic:"4"
  }
  const response = await client.post(urlUserScores).send(userScore).end()
  response.assertStatus(200)
})
test('should insert value to admin score table', async ({ client }) => {
  const adminScore = {
      story: "3",
      gameplay : "10",
      performance : "6",
      graphic : "4"
    }

    const resonse = await client.post(urlAdminScores).send(adminScore).end()

    resonse.assertStatus(200)
})
test('should insert value to comment table', async ({ client }) => {
  const comment = {
    comment :"comment_test_01"
  }
  const response = await client.post(urlComment).send(comment).end()

  response.assertStatus(200)
})
test('should insert value to post table', async ({ client }) => {
  const post = {
    topic : "Naratip Simulater",
    body : "Simulation of New Naratip",
    writer : "New himself"
  }

  const resonse = await client.post(urlPosts).send(post).end()

  resonse.assertStatus(200)
})