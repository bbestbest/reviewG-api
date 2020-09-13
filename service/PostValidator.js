const Validator = use("Validator")

module.exports = async function PostValidator ( data ) {
  if (typeof data !== 'object') throw new Error()

  const { topic,body,writer  } = data

  const rules = {
    topic:'required',
    body:'required',
    writer:'required'

  }

  const validation = await Validator.validateAll({
    topic,body,writer 
  }, rules)


  return {
    error: validation.messages()
  }
}

