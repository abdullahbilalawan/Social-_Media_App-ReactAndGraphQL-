module.exports.validateRegisterInput = (
    username,
    email,
    password,
    confirmPassword
) => {
    const errors = {};
    if(username.trim()===""){
        errors.username='Username must not be empty'
    }
    if(email.trim()===""){
        errors.email='Email must not be empty'
    }
    if(password===""){
        errors.password='Password  must not be empty'
    } else if(password!== confirmPassword){
        errors.password= 'Passwords should match'
    }

    return{
        errors,
        valid: Object.keys(errors).length < 1
    }
}

module.exports.validateLoginInput = (username, password) => {
    const errors = {};
    if(username.trim()===""){
        errors.username='Username must not be empty'
    }
    if(password.trim()===""){
        errors.password='password must not be empty'
    }

    return{
        errors,
        valid: Object.keys(errors).length < 1
    }

}