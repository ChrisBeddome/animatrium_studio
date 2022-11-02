import { startServer, setOutput, runInitializers } from "../lib/initialization.js";

const serverProcess = startServer("dev");
setOutput(serverProcess);
runInitializers();
