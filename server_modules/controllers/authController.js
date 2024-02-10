const Auth = {} //empty object

Auth.login = (req, res) => {
    res.send({ token: 'token-will-be-here' })
}
Auth.register = (req, res) => {
    res.send({ token: 'token-will-be-here' })
}

export default Auth;