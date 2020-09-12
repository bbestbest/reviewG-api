'use strict'

const { test } = use('Test/Suite')('OverAllScore')
const overallScore = require('../../util/OverAllScoreUtil')
const AdminScoreModel = use('App/Models/AdminScore')
const UserScoreModel = use('App/Models/UserScore')
const AdminScoreUtil = require('../../util/AdminScoreUtil.func')

test('Overall score should return float number', async ({ assert }) => {
  const overall = await overallScore(1,2,3,4)
  assert.deepEqual(2.5,overall)
}),
test('', async ({ assert }) => {
  const adminScore = await AdminScoreUtil(AdminScoreModel).getByID('1')
  console.log(adminScore)
})