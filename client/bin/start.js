import { startServer} from "./initialize.js"
import setServerOutput from "../lib/utils/setServerOutput"

const serverProcess = startServer("prod")
setServerOutput(serverProcess)
