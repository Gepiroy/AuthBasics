const Actions = {} //empty object

Actions.take = (req, res) => {
    res.send({ took: 'something that you took' })
}

export default Actions;