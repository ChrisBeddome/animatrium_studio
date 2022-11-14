import express from "express"
import throwMissingVarError from "../lib/utils/throwMissingVarError.js"
import { generateNotFoundError, logError, sendErrorResponse } from "./middleware/errorHandler.js"
import entryPoint from "./routes/entryPoint.js"

const app = express()
const port = parseInt(process.env.API_PORT) || (() => { throwMissingVarError("API_PORT") })()

app.use("/", entryPoint);
app.use(generateNotFoundError); 
app.use(logError);
app.use(sendErrorResponse);

app.listen(port, () => {
  console.log(`Server started. Listening for requests on port ${port}...`)
})

