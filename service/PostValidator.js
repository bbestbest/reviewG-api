const Validator = use("Validator")

module.exports = async function PostValidator ( data ) {
  if (typeof data !== 'object') throw new Error()

  const { topic,bodyV1,bodyV2,bodyV3,bodyV4,bodyV5,writer  } = data

  const rules = {
    topic:'required',
    bodyV1:'required',
    bodyV2:'required',
    bodyV3:'required',
    bodyV4:'required',
    bodyV5:'required',
    writer:'required'

  }

  const validation = await Validator.validateAll({
    topic,bodyV1,bodyV2,bodyV3,bodyV4,bodyV5,writer 
  }, rules)


  return {
    error: validation.messages()
  }
}

