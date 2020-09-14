module.exports = function (CommentModel, comment_id) {
    return CommentModel.create({
      comment_id,
      comment : 'test001_test001'
    })
}
  