module.exports = function (UserScoreModel, user_score_id) {
    return UserScoreModel.create({
      user_score_id,
      story:'9',
      gameplay:'6',
      performance:'3',
      graphic:'5'
    })
}
  