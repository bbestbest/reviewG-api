module.exports = function (PostModel, post_id) {
    return PostModel.create({
      post_id,
      topic : "Naratip Simulater",
      body : "Simulation of New Naratip",
      writer : "New himself"
    })
}
  