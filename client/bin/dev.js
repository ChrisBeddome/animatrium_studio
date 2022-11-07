import { startServer } from "./initialize.js"
import setServerOutput from "../lib/utils/setServerOutput.js"

const serverProcess = startServer("dev")
setServerOutput(serverProcess)
