const Validator = use('Validator')

module.exports = async function AdminValidator ( data ) {
  if (typeof data !== 'object') throw new Error()

  const { username, password , email } = data

  const rules = {
    username: 'required',
    password: 'required|min:8',
    email: 'required|email'
  }

  const validation = await Validator.validateAll({
    username, password , email
  }, rules)

  return {
    error: validation.messages()
  }
}

