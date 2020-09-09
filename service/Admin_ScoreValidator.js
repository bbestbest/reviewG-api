const Validator = use("Validator")

module.exports = async function AdminScoreValidator ( data ) {
  if (typeof data !== 'object') throw new Error()

  const { story,gameplay,performance,graphic } = data

  const rules = {
    story:'required|number|under:11',
    gameplay:'required|number|under:11',
    performance:'required|number|under:11',
    graphic:'required|number|under:11'
  }

  const validation = await Validator.validateAll({
    story,gameplay,performance,graphic
  }, rules)


  return {
    error: validation.messages()
  }
}

