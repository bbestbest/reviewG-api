const Validator = use("Validator")

module.exports = async function AccountValidator ( data ) {
  if (typeof data !== 'object') throw new Error()

  const { username, email, password } = data

  const rules = {
    username: 'required',
    email: 'required|email|unique:user,email',
    password: 'required|min:8'
  }

  const validation = await Validator.validateAll({
    username, email, password
  }, rules)

  return {
    error: validation.messages()
  }
}

