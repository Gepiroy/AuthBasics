import express from 'express'
import authRouter from './routers/authRouter.js'
import actionRouter from './routers/actionRouter.js'
import globalDB from "./db/globalDB.js"
import db from "./db/db.js"

const app = express()
const port = 3000

app.use(express.json()) //to enable content-type: json in all requests.
app.use("/auth", authRouter)
app.use("/actions", actionRouter)

globalDB.tryCreateDatabase()
globalDB.close()
db.tryCreateTables()

app.listen(port, () => { //by default, it opens on 0.0.0.0, not on localhost.
    console.log(`App listening on port ${port}`)
})