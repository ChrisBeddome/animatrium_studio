import express from "express"
import entryPoint from "src/routes/entryPoint.js"

const app = express()
app.use("/", entryPoint)

export default app 
