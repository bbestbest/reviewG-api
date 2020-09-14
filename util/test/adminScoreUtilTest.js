module.exports = function (AdminScoreModel, admin_score_id) {
    return AdminScoreModel.create({
      admin_score_id,
      story:'9',
      gameplay:'6',
      performance:'3',
      graphic:'5'
    })
}
  