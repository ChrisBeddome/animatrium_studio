import express from "express"
import throwMissingVarError from "../lib/utils/throwMissingVarError.js"
import entryPoint from "./routes/entryPoint.js"

const app = express()
const port = parseInt(process.env.API_PORT) || (() => { throwMissingVarError("API_PORT") })()

app.use("/", entryPoint);

app.listen(port, () => {
  console.log(`Server started. Listening for requests on port ${port}...`)
})

