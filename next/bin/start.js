import { startServer, setOutput, runInitializers } from "../lib/initialization.js";

const serverProcess = startServer("prod");
setOutput(serverProcess);
runInitializers();
