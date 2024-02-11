import WebSocket from 'express-ws'
import express from 'express'
import wsRouter from './routers/wsRouter.js'

const port = 3300

const app = WebSocket(express()).app

wsRouter.mount()

app.use("/ws", wsRouter)

app.listen(port, () => { //by default, it opens on 0.0.0.0, not on localhost.
    console.log(`App listening on port ${port}`)
})