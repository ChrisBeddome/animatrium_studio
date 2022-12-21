import express from "express"
import entryPoint from "src/routes/entryPoint.js"

const app: express.Application = express()
app.use("/", entryPoint)

export default app 
