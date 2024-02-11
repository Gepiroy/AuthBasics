const Actions = {} //empty object

Actions.login = (req, res) => {
    res.send({ token: 'token-will-be-here' })
}
Actions.register = (req, res) => {
    res.send({ token: 'token-will-be-here' })
}

export default Actions;