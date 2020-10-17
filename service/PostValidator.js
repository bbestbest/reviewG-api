const Validator = use("Validator")

module.exports = async function PostValidator ( data ) {
  if (typeof data !== 'object') throw new Error()

  const { topic, body, writer, catagories  } = data

  const rules = {
    topic:'required',
    body:'required',
    writer:'required',
    catagories: 'required|unique:posts'

  }

  const validation = await Validator.validateAll({
    topic,body,writer,catagories
  }, rules)


  return {
    error: validation.messages()
  }
}

