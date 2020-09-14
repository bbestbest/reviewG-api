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

test('should patch a new data to inserted data, async ({ assert }) => {

})
