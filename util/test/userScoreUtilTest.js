const OverallScoreUtil = require('../OverAllScoreUtil')
module.exports = function (UserScoreModel, user_score_id) {
  const story = 2
  const gameplay = 7
  const performance = 1
  const graphic = 8
  const overall = OverallScoreUtil(story,gameplay,performance,graphic)
    return UserScoreModel.create({
      user_score_id,
      story,
      gameplay,
      performance,
      graphic,
      overall
    }).then((response) => response["$attributes"])
}
  