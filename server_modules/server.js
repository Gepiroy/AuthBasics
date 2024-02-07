import express from 'express'
import routeAuth from './routes/routeAuth.js'
import routeInteract from './routes/routeInteract.js'

const app = express()
const port = 3000

app.use("/auth", routeAuth)
app.use("/actions", routeInteract)

app.listen(port, () => { //by default, it opens on 0.0.0.0, not on localhost.
    console.log(`App listening on port ${port}`)
})