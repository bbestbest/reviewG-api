const OverallScoreUtil = require('../OverAllScoreUtil')
module.exports = function (AdminScoreModel, admin_score_id) {
  const story = 9
  const gameplay = 6
  const performance = 3
  const graphic = 5
  const overall = OverallScoreUtil(story,gameplay,performance,graphic)
    return AdminScoreModel.create({
      admin_score_id,
      story,
      gameplay,
      performance,
      graphic,
      overall
    }).then((response) => response["$attributes"])
}
  