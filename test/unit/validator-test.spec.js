'use strict'

const { test } = use('Test/Suite')('Validator Test')
const UserValidator = require('../../service/UserValidator')
const AdminValidator = require('../../service/AdminValidator')
const UserScoreValidator = require('../../service/UserScoreValidator')
const AdminScoreValidator = require('../../service/AdminScoreValidator')
const CommentValidator = require('../../service/CommentValidator')
const PostValidator = require('../../service/PostValidator')


test('should return error with incorrect that required data from user validator', async ({ assert }) => {
  const data = {
    username:"test01",
    password:"1234",
    email:"new.com"
  }
  const user = await UserValidator(data)
  assert.isOk(user.error,'user error')
})
test('should return error with incorrect data that required from admim validator', async ({ assert }) => {
  const data = {
    username:"test01",
    password:"1234",
    email:"new.com"
  }
  const admin = await AdminValidator(data)
  assert.isOk(admin.error,'admin error')
})
test('should return error with incorrect data that required from user score validator', async ({ assert }) => {
  const data = {
    story:"3",
    gameplay:"9",
    performance:"12",
    graphic:"เอาไป 100"
  }
  const userScore = await AdminValidator(data)
  assert.isOk(userScore.error,'user score error')
})
test('should return error with incorrect data that required from admin score validator', async ({ assert }) => {
  const data = {
    story:"3",
    gameplay:"9",
    performance:"53",
    graphic:"99999999"
  }
  const adminScore = await AdminScoreValidator(data)
  assert.isOk(adminScore.error,'user score error')
})
test('should return error with incorrect data that required from comment validator', async ({ assert }) => {
  const data = {
    comment : ""
  }
  const comment = await CommentValidator(data)
  assert.isOk(comment.error,'user score error')
})
test('should return error with incorrect data that required from post validator', async ({ assert }) => {
  const test = ''
  const data = {
    topic : "Naratip Simulater",
    body : "Simulation of New Naratip",
    writer : `${test}`
  }
  const post = await PostValidator(data)
  assert.isOk(post.error,'user score error')
})
