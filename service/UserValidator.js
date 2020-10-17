const Validator = use("Validator")

module.exports = async function UserValidator ( data ) {
  if (typeof data !== 'object') throw new Error()

  const { email, username, password, display_name } = data

  const rules = {
    username: 'required',
    password: 'required|min:8',
    email: 'required|email|unique:users,email',
    display_name: 'required|min:5'
  }

  const validation = await Validator.validateAll({
    email, username, password, display_name
  }, rules)

  return {
    error: validation.messages()
  }
}

