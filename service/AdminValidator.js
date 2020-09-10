const Validator = use("Validator")

module.exports = async function adminValidator (data) {
    if(typeof data !== 'object') throw new Error()

    const {first_name,last_name,email,password} = data

    const rules = {
        username : 'required|unique',
        password: 'required|min:8',
        email: 'required|email|unique:teachers,email'
    }
    const validation = await Validator.validateAll({
        first_name,last_name,email,password
    } , rules)
 
    
    return {
        error: validation.messages()
    }
}