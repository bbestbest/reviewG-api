const Validator = use("Validator")

module.exports = async function CommentValidator ( data ) {
  if (typeof data !== 'object') throw new Error()

  const { comment } = data

  const rules = {
    comment:'required'
  }

  const validation = await Validator.validateAll({
    comment
  }, rules)


  return {
    error: validation.messages()
  }
}

