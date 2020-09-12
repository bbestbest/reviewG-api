module.exports = function (row , Factory) {
    return Factory.model('App/Models/AdminScore').createMany(row)
}
  